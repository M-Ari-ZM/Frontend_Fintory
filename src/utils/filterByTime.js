export function filterByTime(transactions, filter) {
  const now = new Date();

  return transactions.filter((t) => {
    const date = new Date(t.date);

    if (filter === "all") return true;

    if (filter === "week") {
      const firstDay = new Date(now);
      firstDay.setDate(now.getDate() - now.getDay());
      firstDay.setHours(0, 0, 0, 0);

      return date >= firstDay;
    }

    if (filter === "month") {
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    }

    if (filter === "3months") {
      const past = new Date();
      past.setMonth(now.getMonth() - 3);
      return date >= past;
    }

    if (filter === "year") {
      return date.getFullYear() === now.getFullYear();
    }

    return true;
  });
}
