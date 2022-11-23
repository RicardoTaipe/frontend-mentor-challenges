import { useState, useCallback } from 'react';
import TodoFilters from './components/TodoFilters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import data from './data';
function App() {
  const [todos, setTodos] = useState(data);

  const addTodo = useCallback(
    (todo) => {
      setTodos([todo, ...todos]);
    },
    [todos]
  );

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedTodos);
  };

  return (
    <main className="mx-auto w-[88%] max-w-[34rem] mt-12 md:mt-0">
      <TodoForm onSubmit={addTodo} />
      <section className="text-xs tracking-tight md:text-lg text-grayish-400 dark:text-blueish-50">
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
        <TodoFilters />
      </section>
      <footer className="mt-10 text-xs text-center text-grayish-300 dark:text-blueish-300">
        Drag and drop to reorder list
      </footer>
    </main>
  );
}

export default App;
