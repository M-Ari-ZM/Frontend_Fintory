export default function Card({ title, value, icon, color, bg }) {
  const Icon = icon;

  return (
    <div className={`p-4 rounded-xl hover:shadow-md ${bg}`}>
      <span className="flex justify-between">
        <p>{title}</p>
        <Icon color={color} />
      </span>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
