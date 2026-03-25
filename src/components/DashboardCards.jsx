import formatRupiah from "../utils/formatRupiah";
import Card from "./ui/Card";

export default function DashboardCards({
  income,
  expense,
  balance,
  cardsData,
}) {
  const dataMap = {
    income,
    expense,
    balance,
  };

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {cardsData.map(({ key, ...card }) => (
        <Card key={key} {...card} value={formatRupiah(dataMap[key])} />
      ))}
    </div>
  );
}
