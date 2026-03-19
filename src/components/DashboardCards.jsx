import formatRupiah from "../utils/formatRupiah";

export default function DashboardCards({ income, expense, balance }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <div className="bg-white border border-green-400 p-4 rounded-xl hover:shadow-md">
        <p>Total Pemasukan</p>
        <h2 className="text-xl font-bold">{formatRupiah(income)}</h2>
      </div>

      <div className="bg-white border border-red-400 p-4 rounded-xl hover:shadow-md">
        <p>Total Pengeluaran</p>
        <h2 className="text-xl font-bold">{formatRupiah(expense)}</h2>
      </div>

      <div className="bg-blue-200 p-4 rounded-xl hover:shadow-md">
        <p>Saldo</p>
        <h2 className="text-xl font-bold">{formatRupiah(balance)}</h2>
      </div>
    </div>
  );
}
