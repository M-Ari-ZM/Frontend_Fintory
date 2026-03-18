export default function ActivityList({ transactions }) {
  return (
    <div className="border rounded-xl p-4">
      <h2 className="font-bold mb-3">Aktivitas Terbaru</h2>

      {transactions.length === 0 && <p>Belum ada transaksi</p>}

      {transactions
        .slice(-5)
        .reverse()
        .map((t) => (
          <div key={t.id} className="flex justify-between border-b py-2">
            <span>{t.desc}</span>

            <span
              className={
                t.type === "income" ? "text-green-600" : "text-red-600"
              }
            >
              Rp {t.amount}
            </span>

            <span>{t.date}</span>
          </div>
        ))}
    </div>
  );
}
