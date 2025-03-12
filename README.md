# Silicon Society Project

This project is a comprehensive assessment for Silicon Society, expertly crafted by Toni Stuckey utilizing Next.js and MongoDB technologies.

## Initializing the Development Environment

To launch the development server, execute one of the following commands in your terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Configuring the Environment Variables

Prior to initializing the development server, ensure the presence of an `.env` file in the project's root directory. This file must contain the MongoDB connection URI in the following format:

```
NEXT_PUBLIC_MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority&appName=<appname>
```

## Technologies Employed

- **Next.js**: A cutting-edge React framework optimized for production environments.
- **MongoDB**: A robust NoSQL database solution for efficient data storage and retrieval.


