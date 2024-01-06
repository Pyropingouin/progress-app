import categories from "../caterogies";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const expenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectedCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default expenseFilter;
