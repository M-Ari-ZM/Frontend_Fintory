import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MonthlyChart({ data }) {
  if (!data.length) return <p className="text-center">Tidak ada data</p>;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="month" />

        <YAxis tickFormatter={(value) => `Rp ${value}`} />

        <Tooltip formatter={(value) => `Rp ${value.toLocaleString("id-ID")}`} />

        <Legend />

        <Bar dataKey="income" fill="#6366f1" name="Pemasukan" />
        <Bar dataKey="expense" fill="#f97316" name="Pengeluaran" />
      </BarChart>
    </ResponsiveContainer>
  );
}
