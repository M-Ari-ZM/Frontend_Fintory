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
  const isEmpty = data.every((item) => item.income === 0 && item.expense === 0);

  if (isEmpty) return <p className="text-center">Tidak ada data</p>;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="month" />

        <YAxis tickFormatter={(value) => `Rp ${value}`} />

        <Tooltip formatter={(value) => `Rp ${value.toLocaleString("id-ID")}`} />

        <Legend />

        <Bar dataKey="income" fill="#0b4695" name="Pemasukan" />
        <Bar dataKey="expense" fill="#95baea" name="Pengeluaran" />
      </BarChart>
    </ResponsiveContainer>
  );
}
