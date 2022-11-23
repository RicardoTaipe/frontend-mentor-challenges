import { useState } from "react";
import TodoFilters from "./components/TodoFilters";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import data from "./data";
function App() {
  const [todos, setTodos] = useState(data);

  return (
    <main className="container mx-auto w-[88%] max-w-[34rem] mt-12 md:mt-0">
      <TodoForm />
      <section className="text-xs tracking-tight md:text-lg text-grayish-400 dark:text-blueish-50">
        <TodoList todos={todos} />
        <TodoFilters />
      </section>
      <footer className="mt-10 text-xs text-center text-grayish-300 dark:text-blueish-300">
        Drag and drop to reorder list
      </footer>
    </main>
  );
}

export default App;
