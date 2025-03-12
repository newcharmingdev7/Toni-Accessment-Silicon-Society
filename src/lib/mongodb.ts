import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

const cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI as string)
      .then((mongo) => {
        mongoose.connection.on("connected", () => {
          console.log("MongoDB connected");
        });

        mongoose.connection.on("error", (err) => {
          console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
          console.log("MongoDB disconnected");
        });

        return mongo;
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
