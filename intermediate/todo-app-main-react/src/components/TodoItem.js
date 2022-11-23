import iconCross from '../images/icon-cross.svg';

export default function TodoItem({ item }) {
  return (
    <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
      <label htmlFor="completed"></label>
      <input
        defaultChecked={item.completed}
        type="checkbox"
        id="completed"
        name=""
        className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0"
        aria-label={
          item.completed ? 'Mark item as incomplete' : 'Mark item as complete'
        }
      />
      <p className="flex-1 ml-3">{item.description}</p>
      <img
        src={iconCross}
        alt="remove"
        aria-label="Remove Item"
        className="w-3"
      />
    </div>
  );
}
