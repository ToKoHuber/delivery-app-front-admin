import List from "./productList/List";

export default function ProductLists({
  categoryCount,
}: {
  categoryCount: Record<string, number>;
}) {
  return (
    <div className="flex flex-col gap-5">
      {Object.entries(categoryCount).map(([category, count]) => (
        <List key={category} category={category} count={count} />
      ))}
    </div>
  );
}
