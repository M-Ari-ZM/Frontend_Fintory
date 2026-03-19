import formatDate from "../utils/formatDate";
import formatRupiah from "../utils/formatRupiah";

export default function ActivityList({ transactions }) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 hover:shadow-md hover:-translate-y-1 transition">
      <h2 className="font-bold mb-3">Aktivitas Terbaru</h2>

      {transactions.length === 0 && <p>Belum ada transaksi</p>}

      {transactions
        .slice(-5)
        .reverse()
        .map((t) => (
          <div
            key={t.id}
            className="flex border border-gray-300 my-5 justify-between rounded-md px-5 py-2"
          >
            <div>
              <p>{t.desc}</p>
              <p className="text-xs text-gray-500">{formatDate(t.date)}</p>
            </div>

            <span
              className={
                t.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              {formatRupiah(t.amount)}
            </span>
          </div>
        ))}
    </div>
  );
}
