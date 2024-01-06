import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
  //TODO: changer en date
  date: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) {
    return null;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>{expense.amount} minutes</td>
            <td>{expense.category}</td>

            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>
            {expenses.reduce((acc, expense) => expense.amount + acc, 0) + " "}
            minutes
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
