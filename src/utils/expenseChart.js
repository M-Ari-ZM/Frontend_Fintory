export const generateExpenseChartData = (transactions) => {
  const result = {};

  transactions.forEach((item) => {
    if (item.type !== "expense") return;

    const date = new Date(item.date);
    const month = date.toLocaleString("id-ID", { month: "short" });

    if (!result[month]) {
      result[month] = 0;
    }

    result[month] += item.amount;
  });

  return Object.keys(result).map((key) => ({
    name: key,
    value: result[key],
  }));
};
