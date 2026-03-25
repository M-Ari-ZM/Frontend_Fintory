import { useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, LabelList } from "recharts";
import formatRupiah from "../utils/formatRupiah";

export default function ExpenseChart({
  data,
  pieChartStyle,
  legendChartStyle,
  radiusNumber,
}) {
  const location = useLocation();

  const COLORS = [
    "#0b4695",
    "#0f5fc9",
    "#317bdf",
    "#639be5",
    "#95baea",
    "#ccdcf0",
  ];

  if (data.length === 0) {
    return <p className="text-center">Tidak ada data</p>;
  }

  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className={`${pieChartStyle}`}>
      <PieChart width={240} height={270}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={radiusNumber}
          outerRadius={110}
        >
          <LabelList
            fill="white"
            fontWeight="bold"
            position="inside"
            valueAccessor={(_, index) => {
              if (!data[index]) return "";
              const percent = data[index].value / total;
              if (percent < 0.05) return "";

              return `${(percent * 100).toFixed(0)}%`;
            }}
          />
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
              className="hover:grayscale cursor-pointer"
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value, name) => [`${formatRupiah(value)}`, name]}
        />
      </PieChart>

      <div className={`${legendChartStyle}`}>
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />

              {(location.pathname === "/home" && (
                <span className="text-sm">{item.name}</span>
              )) ||
                (location.pathname === "/report" && (
                  <div className="flex text-sm w-53 justify-between">
                    <span>{item.name}</span>
                    <span>{formatRupiah(item.value)}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
