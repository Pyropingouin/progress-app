import React from "react";

interface Task {
  id: number;
  description: string;
  amount: number;
  category: string;
  //TODO: changer en date
  date: string;
}

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
}
const TaskList = ({ tasks: tasks, onDelete }: Props) => {
  if (tasks.length === 0) {
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
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.date}</td>
            <td>{task.description}</td>
            <td>{task.amount} minutes</td>
            <td>{task.category}</td>

            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(task.id)}
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
            {tasks.reduce((acc, task) => task.amount + acc, 0) + " "}
            minutes
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TaskList;
