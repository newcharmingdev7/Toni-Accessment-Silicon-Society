import ChartWidget from "./ChartWidget";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-12">
      <h1 className="text-lg md:text-xl font-semibold mb-4">Dashboard</h1>
      <ChartWidget />
    </div>
  );
}
