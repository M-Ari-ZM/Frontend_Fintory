import { useState } from "react";
import {
  getTransaksi,
  addTransaksi,
  deleteTransaksi,
  updateTransaksi,
} from "../services/api";

export default function useTransactions() {
  const [transactions, setTransactions] = useState([]);

  // FETCH
  const fetchTransactions = async () => {
    try {
      const res = await getTransaksi();
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // ADD
  const addTransaction = async (data) => {
    try {
      await addTransaksi(data);
      await fetchTransactions(); // sync ulang
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const deleteTransaction = async (id) => {
    try {
      await deleteTransaksi(id);
      await fetchTransactions();
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE
  const updateTransaction = async (data) => {
    try {
      await updateTransaksi(data.id, data);
      await fetchTransactions();
    } catch (err) {
      console.log(err);
    }
  };

  return {
    transactions,
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    updateTransaction,
  };
}
