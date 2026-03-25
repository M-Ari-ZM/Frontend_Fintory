import { useState } from "react";
import { BadgePlus } from "lucide-react";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import MonthlyChart from "../components/MonthlyChart";
import ExpenseChart from "../components/ExpenseChart";
import Footer from "../components/Footer";
import useTransactions from "../hooks/useTransactions";
import { filterTransactions } from "../utils/filterTransactions";
import { calculateSummary } from "../utils/calculateSummary";
import { generateExpenseChartData } from "../utils/expenseChart";
import { generateMonthlyChartData } from "../utils/monthlyChart";
import { cardsDataReport } from "../utils/cardsData";

export default function Dashboard() {
  const [filter, setFilter] = useState("month");
  const [chartType, setChartType] = useState("bar");
  const { transactions } = useTransactions();
  const filteredTransactions = filterTransactions(transactions, filter);
  const { income, expense, balance } = calculateSummary(filteredTransactions);
  const monthlyData = generateMonthlyChartData(filteredTransactions);
  const expenseData = generateExpenseChartData(filteredTransactions);

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Navbar />
      <div className="p-8 space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Laporan Keuangan</h1>
          <p className="text-gray-500">Analisis performa keuangan Anda.</p>
        </div>

        {/* FILTER */}
        <div className="flex justify-self-center sm:justify-self-end gap-2 bg-gray-200 p-1 rounded-lg w-fit">
          {["day", "week", "month", "year"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${
                filter === f ? "bg-white shadow transition" : "text-gray-500"
              }`}
            >
              {f === "day" && "Hari"}
              {f === "week" && "Minggu"}
              {f === "month" && "Bulan"}
              {f === "year" && "Tahun"}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <DashboardCards
          income={income}
          expense={expense}
          balance={balance}
          cardsData={cardsDataReport}
        />

        {/* CONTENT */}
        <div className="gap-2 bg-gray-200 p-1 rounded-lg w-fit">
          <button
            onClick={() => setChartType("bar")}
            className={`px-3 py-1 rounded ${
              chartType === "bar"
                ? "bg-white shadow transition"
                : "text-gray-500"
            }`}
          >
            Bulanan
          </button>

          <button
            onClick={() => setChartType("pie")}
            className={`px-3 py-1 rounded ${
              chartType === "pie"
                ? "bg-white shadow transition"
                : "text-gray-500"
            }`}
          >
            Kategori
          </button>
        </div>

        <div className="bg-white border border-gray-300 p-4 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
          <h2 className="font-bold">Pemasukan & Pengeluaran Bulanan</h2>
          <p className="text-gray-500 text-sm mb-4">
            Perbandingan pemasukan dan pengeluaran per bulan
          </p>

          {/* CHART */}
          {chartType === "bar" ? (
            <MonthlyChart data={monthlyData} />
          ) : (
            <ExpenseChart data={expenseData} />
          )}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
