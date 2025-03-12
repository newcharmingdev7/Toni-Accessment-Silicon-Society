import { Document } from "mongoose";

export interface SalesData {
  _id: string;
  company: string;
  timeframe: string;
  data: Sales[];
}

export interface Sales extends Document {
  date: string;
  totalSales: number;
  orderCount: number;
  averageOrderValue: number;
  topCategory: string;
  customerSatisfaction: number;
  newCustomers: number;
  returnRate: number;
}
