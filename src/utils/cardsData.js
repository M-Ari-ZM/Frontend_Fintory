import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";

export const cardsDataHome = [
  {
    key: "income",
    title: "Total Pemasukan",
    icon: ArrowUpCircle,
    color: "green",
    bg: "bg-white border border-green-400",
  },
  {
    key: "expense",
    title: "Total Pengeluaran",
    icon: ArrowDownCircle,
    color: "red",
    bg: "bg-white border border-red-400",
  },
  {
    key: "balance",
    title: "Saldo",
    icon: Wallet,
    color: "blue",
    bg: "bg-blue-200",
  },
];

export const cardsDataReport = [
  {
    key: "income",
    title: "Total Pemasukan",
    icon: ArrowUpCircle,
    color: "green",
    bg: "bg-green-100 border border-green-300",
  },
  {
    key: "expense",
    title: "Total Pengeluaran",
    icon: ArrowDownCircle,
    color: "red",
    bg: "bg-red-100 border border-red-300",
  },
  {
    key: "balance",
    title: "Saldo",
    icon: Wallet,
    color: "blue",
    bg: "bg-blue-100 border border-blue-300",
  },
];
