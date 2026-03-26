import { SlidersHorizontal } from "lucide-react";

export default function FilterByTimeSelect({ value, onChange }) {
  return (
    <div className="flex justify-end">
      <div className="relative w-fit">
        <SlidersHorizontal
          className="absolute left-3 top-3 text-gray-400"
          size={16}
        />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className=" bg-gray-100 border border-gray-300 p-2 pl-9 w-fit rounded-md appearance-none"
        >
          <option value="all">Semua Waktu</option>
          <option value="week">Minggu Ini</option>
          <option value="month">Bulan Ini</option>
          <option value="3months">3 Bulan Terakhir</option>
          <option value="year">Tahun Ini</option>
        </select>
      </div>
    </div>
  );
}
