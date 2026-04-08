export function generateMonthlyChartData(transactions) {
  const result = [];
  const now = new Date();

  for (let i = 4; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);

    const monthKey = d.toLocaleString("id-ID", { month: "short" });
    const year = d.getFullYear();

    result.push({
      key: `${monthKey}-${year}`,
      month: `${monthKey} ${year}`,
      year,
      income: 0,
      expense: 0,
    });
  }

  transactions.forEach((t) => {
    const date = new Date(t.date);

    const monthKey = date.toLocaleString("id-ID", { month: "short" });
    const year = date.getFullYear();
    const key = `${monthKey}-${year}`;

    const found = result.find((item) => item.key === key);

    if (found) {
      if (t.type === "income") {
        found.income += t.amount;
      } else {
        found.expense += t.amount;
      }
    }
  });

  return result;
}
