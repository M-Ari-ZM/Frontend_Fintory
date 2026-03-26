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

        <Tooltip
          allowEscapeViewBox={{ x: false, y: false }}
          wrapperStyle={{ pointerEvents: "none" }}
          content={({ active, payload, label }) => {
            if (!active || !payload || !payload.length) return null;

            return (
              <div className="bg-white p-3  border border-gray-300 rounded shadow">
                <p>{label}</p>
                <p className="text-[#0b4695]">
                  Pemasukan : Rp {payload[0]?.value.toLocaleString("id-ID")}
                </p>
                <p className="text-[#95baea]">
                  Pengeluaran : Rp {payload[1]?.value.toLocaleString("id-ID")}
                </p>
              </div>
            );
          }}
        />

        <Legend />

        <Bar dataKey="income" fill="#0b4695" name="Pemasukan" />
        <Bar dataKey="expense" fill="#95baea" name="Pengeluaran" />
      </BarChart>
    </ResponsiveContainer>
  );
}
