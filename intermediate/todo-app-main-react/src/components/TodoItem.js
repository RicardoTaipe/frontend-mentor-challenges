import iconCross from '../images/icon-cross.svg';

export default function TodoItem({ item, completeTodo, removeTodo }) {
  return (
    <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
      <label>
        <input
          checked={item.completed}
          type="checkbox"
          className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0"
          aria-label={
            item.completed ? 'Mark item as incomplete' : 'Mark item as complete'
          }
          onChange={() => completeTodo(item.id)}
        />
      </label>
      <p
        className={
          'flex-1 ml-3 ' +
          `${item.completed ? 'text-grayish-300 dark:text-blueish-300' : ''}`
        }
      >
        {item.completed ? <del>{item.description}</del> : item.description}
      </p>
      <img
        src={iconCross}
        alt="remove"
        aria-label="Remove Item"
        className="w-3"
        onClick={() => removeTodo(item.id)}
      />
    </div>
  );
}
