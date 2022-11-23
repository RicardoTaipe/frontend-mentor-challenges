import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div className="divide-y bg-grayish-50 dark:bg-blueish-500 rounded-t-md divide-grayish-100 dark:divide-blueish-400">
      {todos.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
}
