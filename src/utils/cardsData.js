import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";

export const cardsData = [
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
