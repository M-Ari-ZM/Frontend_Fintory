export default function DashboardCards({ income, expense, balance }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="border border-green-400 p-4 rounded-xl">
        <p>Total Pemasukan</p>
        <h2 className="text-xl font-bold">Rp {income}</h2>
      </div>

      <div className="border border-red-400 p-4 rounded-xl">
        <p>Total Pengeluaran</p>
        <h2 className="text-xl font-bold">Rp {expense}</h2>
      </div>

      <div className="bg-blue-200 p-4 rounded-xl">
        <p>Saldo</p>
        <h2 className="text-xl font-bold">Rp {balance}</h2>
      </div>
    </div>
  );
}
