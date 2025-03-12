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
  const [loading, setLoading] = useState(true);

  const fetchSalesData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/fetchSalesData");
      const data = await response.json();
      setSalesData(data);
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
              Sales Data for {salesDataMock.timeframe}
            </h3>
            <h3>{salesDataMock.company}</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesDataMock?.data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="totalSales" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default ChartWidget;
