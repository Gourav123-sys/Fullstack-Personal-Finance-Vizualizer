export default function DashboardSummary({ transactions, categories }) {
  const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const recent = transactions.slice(0, 5);
  const categoryMap = Object.fromEntries(
    categories.map((cat) => [cat._id, cat])
  );
  const categoryTotals = categories
    .map((cat) => ({
      name: cat.name,
      total: transactions
        .filter((tx) => tx.category && tx.category._id === cat._id)
        .reduce((sum, tx) => sum + tx.amount, 0),
      color: cat.color,
    }))
    .filter((c) => c.total > 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex flex-col p-4 sm:p-6 rounded-2xl bg-white shadow border border-gray-200 min-w-0 min-h-0 break-words max-h-60 md:max-h-[22rem] w-full">
        <div className="text-lg font-bold text-gray-700 mb-1">
          Total Expenses
        </div>
        <div className="flex-1 overflow-y-auto min-h-0 w-full custom-scrollbar flex flex-col gap-3 items-center justify-center">
          <div className="w-full bg-gray-50 rounded-xl shadow border border-gray-200 px-4 py-3 flex flex-col items-center">
            <span className="text-3xl font-extrabold text-blue-600 break-words">
              ${total}
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Sum of all transactions
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 sm:p-6 rounded-2xl bg-white shadow border border-gray-200 min-w-0 min-h-0 break-words max-h-60 md:max-h-[22rem] w-full">
        <div className="text-lg font-bold text-gray-700 mb-1">
          Category Breakdown
        </div>
        <div className="flex-1 overflow-y-auto min-h-0 w-full custom-scrollbar">
          <ul className="w-full flex flex-col gap-3">
            {categoryTotals.length === 0 && (
              <li className="text-gray-400 text-center">No category data</li>
            )}
            {categoryTotals.map((cat) => (
              <li
                key={cat.name}
                className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-2 xs:gap-3 bg-gray-50 rounded-xl px-4 py-3 shadow border border-gray-200 min-w-0 break-words w-full"
              >
                <span className="flex items-center gap-2 min-w-0 break-words">
                  <span
                    className="inline-block w-4 h-4 rounded-full border border-gray-300"
                    style={{ background: cat.color }}
                  ></span>
                  <span className="truncate max-w-[7rem] xs:max-w-[10rem] sm:max-w-[12rem] md:max-w-[14rem] lg:max-w-[10rem] xl:max-w-[16rem] text-gray-800">
                    {cat.name}
                  </span>
                </span>
                <span className="text-blue-600 font-semibold">
                  ${cat.total}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-4 sm:p-6 rounded-2xl bg-white shadow border border-gray-200 w-full min-w-0 min-h-0 break-words max-h-60 md:max-h-[22rem]">
        <div className="text-lg font-bold text-gray-700 mb-1">
          Recent Transactions
        </div>
        <div className="flex-1 overflow-y-auto min-h-0 w-full custom-scrollbar">
          <ul className="w-full flex flex-col gap-3 mt-2">
            {recent.length === 0 && (
              <li className="text-gray-400 text-center">
                No recent transactions
              </li>
            )}
            {recent.map((tx) => {
              const cat = tx.category && categoryMap[tx.category._id];
              return (
                <li
                  key={tx._id}
                  className="flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-2 xs:gap-3 bg-gray-50 rounded-xl px-2 sm:px-3 py-2 shadow border border-gray-200 min-w-0 break-words w-full"
                >
                  <span className="font-bold text-blue-600 text-lg">
                    ${tx.amount}
                  </span>
                  <span className="flex-1 text-gray-800 min-w-0 break-words whitespace-pre-line break-words max-w-full xs:max-w-[8rem] md:max-w-[12rem] lg:max-w-[10rem] xl:max-w-[16rem]">
                    {tx.description}
                  </span>
                  {cat && (
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-semibold shadow text-xs whitespace-nowrap min-w-0 break-words border border-gray-300">
                      <span
                        className="inline-block w-3 h-3 rounded-full border border-gray-300"
                        style={{ background: cat.color }}
                      ></span>
                      <span className="truncate max-w-[5rem] xs:max-w-[8rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[10rem] xl:max-w-[16rem]">
                        {cat.name}
                      </span>
                    </span>
                  )}
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {new Date(tx.date).toLocaleDateString()}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
