import { useState } from "react";
import TransactionModal from "../components/TransactionModal";
import DashboardCards from "../components/DashboardCard";
import ActivityList from "../components/ActivityList";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [filter, setFilter] = useState("month");

  function addTransaction(data) {
    const newTransaction = {
      id: Date.now(),
      ...data,
    };

    setTransactions((prev) => [...prev, newTransaction]);
  }

  const now = new Date();

  const filteredTransactions = transactions.filter((t) => {
    const date = new Date(t.date);

    if (filter === "day") {
      return date.toDateString() === now.toDateString();
    }

    if (filter === "month") {
      return date.getMonth() === now.getMonth();
    }

    if (filter === "year") {
      return date.getFullYear() === now.getFullYear();
    }

    return true;
  });

  const income = filteredTransactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = filteredTransactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-200 px-5 py-3 rounded-xl"
        >
          + Tambah Transaksi
        </button>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setFilter("day")}>Hari</button>
        <button onClick={() => setFilter("month")}>Bulan</button>
        <button onClick={() => setFilter("year")}>Tahun</button>
      </div>

      <DashboardCards income={income} expense={expense} balance={balance} />

      <ActivityList transactions={filteredTransactions} />

      <TransactionModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={addTransaction}
      />
    </div>
  );
}
