import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ExpenseChart({ data }) {
  if (data.length === 0) {
    return <p>Tidak ada data</p>;
  }

  const COLORS = ["#ef4444", "#f97316", "#facc15", "#22c55e", "#3b82f6"];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        outerRadius={100}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  );
}
