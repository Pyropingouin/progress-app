import { useState } from "react";
import TaskList from "./expense-tracker/components/TaskList";
import TaskFilter from "./expense-tracker/components/TaskFilter";
import TaskForm from "./expense-tracker/components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "first task",
      amount: 3,
      category: "Informatique",
      date: "2023-01-03",
    },
    {
      id: 2,
      description: "second task",
      amount: 5,
      category: "Informatique",
      date: "2023-01-04",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleTasks = selectedCategory
    ? tasks.filter((e) => e.category === selectedCategory)
    : tasks;

  return (
    <div>
      <div className="mb-5">
        <TaskForm
          onSubmit={(task) =>
            //TODO: Trouver un autre moyen pour les id, parce que si on delete une task, le length diminue, ce qui peut causer des problèmes
            setTasks([...tasks, { ...task, id: tasks.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <TaskFilter
          onSelectedCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <TaskList
        tasks={visibleTasks}
        onDelete={(id) => setTasks(tasks.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
