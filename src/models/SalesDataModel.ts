import mongoose, { Schema } from "mongoose";
import { SalesData, Sales } from "@/types/dashboard.type";

const SalesSchema = new Schema<Sales>({
  date: { type: String, required: true },
  totalSales: { type: Number, required: true },
  orderCount: { type: Number, required: true },
  averageOrderValue: { type: Number, required: true },
  topCategory: { type: String, required: true },
  customerSatisfaction: { type: Number, required: true },
  newCustomers: { type: Number, required: true },
  returnRate: { type: Number, required: true },
});

const SalesDataSchema = new Schema<SalesData>({
  _id: { type: String, required: true },
  company: { type: String, required: true },
  timeframe: { type: String, required: true },
  data: { type: [SalesSchema], required: true },
});

export default mongoose.models.sales ||
  mongoose.model<SalesData>("sales", SalesDataSchema, "sales");
