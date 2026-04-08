import { Pencil, Trash } from "lucide-react";
import formatDate from "../../utils/formatDate";
import formatRupiah from "../../utils/formatRupiah";

export default function List({ transaction, onDelete, onEdit }) {
  const isIncome = transaction.type === "income";

  return (
    <div
      className={`sm:flex border border-gray-300 my-3 justify-between rounded-md p-4 ${
        isIncome ? "bg-green-50" : "bg-red-50"
      }`}
    >
      <div className="flex justify-between w-full sm:mr-4 sm:pr-3 sm:border-r-2 sm:border-gray-300">
        <div>
          <p className="text-lg">{transaction.desc}</p>
          <p className="text-xs text-gray-500">
            {formatDate(transaction.date)}
          </p>
        </div>

        <span
          className={`text-lg sm:text-2xl font-bold ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}
        >
          {formatRupiah(transaction.amount)}
        </span>
      </div>

      <div className="flex gap-2 justify-end mt-2 sm:mt-0">
        <button
          onClick={() => onEdit(transaction)}
          className="text-blue-500 justify-items-center bg-blue-200 w-11 h-11 rounded-md cursor-pointer"
        >
          <Pencil />
        </button>

        <button
          onClick={() => {
            if (confirm("Yakin ingin menghapus?")) {
              onDelete(transaction.id);
            }
          }}
          className="text-red-500 justify-items-center bg-red-200 w-11 h-11 rounded-md cursor-pointer"
        >
          <Trash />
        </button>
      </div>
    </div>
  );
}
