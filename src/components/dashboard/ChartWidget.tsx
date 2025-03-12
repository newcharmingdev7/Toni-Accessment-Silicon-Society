import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loader from "../default/Loader";
import { SalesData } from "@/types/dashboard.type";
import { salesDataMock } from "@/test/mocks/salesDataMock";

const ChartWidget = () => {
  const [salesData, setSalesData] = useState<SalesData>();
  const [option, setOption] = useState<string>("totalSales");
  const [loading, setLoading] = useState(true);

  const fetchSalesData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/fetchSalesData");
      const data = await response.json();
      setSalesData(data[0]);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white p-4 shadow-md rounded-lg">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold">
              Sales Data for {salesData?.timeframe}
            </h3>
            <h3>{salesData?.company}</h3>
          </div>
          <div className="mb-8 flex justify-end">
            <select
              title="Select a metric"
              className="border rounded-md p-1"
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="totalSales">Total Sales</option>
              <option value="orderCount">Order Count</option>
              <option value="averageOrderValue">Average Order Value</option>
              <option value="customerSatisfaction">
                Customer Satisfaction
              </option>
              <option value="newCustomers">New Customers</option>
              <option value="returnRate">Return Rate</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData?.data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              {option === "totalSales" && (
                <Line type="monotone" dataKey="totalSales" stroke="#3b82f6" />
              )}
              {option === "orderCount" && (
                <Line type="monotone" dataKey="orderCount" stroke="#3b82f6" />
              )}
              {option === "averageOrderValue" && (
                <Line
                  type="monotone"
                  dataKey="averageOrderValue"
                  stroke="#3b82f6"
                />
              )}
              {option === "customerSatisfaction" && (
                <Line
                  type="monotone"
                  dataKey="customerSatisfaction"
                  stroke="#3b82f6"
                />
              )}
              {option === "newCustomers" && (
                <Line type="monotone" dataKey="newCustomers" stroke="#3b82f6" />
              )}
              {option === "returnRate" && (
                <Line type="monotone" dataKey="returnRate" stroke="#3b82f6" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default ChartWidget;
