import List from "./ui/List";

export default function ActivityList({ transactions, onDelete, onEdit }) {
  const latestTransactions = transactions.slice(0, 5);

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 hover:shadow-md hover:-translate-y-1 transition">
      <h2 className="font-bold mb-3">Aktivitas Terbaru</h2>

      {transactions.length === 0 ? (
        <p className="text-center">Belum ada transaksi</p>
      ) : (
        latestTransactions.map((t) => (
          <List
            key={t.id}
            transaction={t}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}
