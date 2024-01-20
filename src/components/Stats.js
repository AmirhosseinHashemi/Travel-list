export default function Stats({ items }) {
  if (items.length === 0)
    return <p className="stats">Your paking list is empty. Add somthing 🚀</p>;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything. Ready to go ✈`
          : `You have ${numItems} item on your list, and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
