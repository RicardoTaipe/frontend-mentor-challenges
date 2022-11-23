export default function TodoFilters() {
  return (
    <>
      <div className="flex flex-wrap border-t cursor-pointer md:flex-nowrap rounded-b-md border-grayish-100 dark:border-blueish-400">
        <div className="flex-1 bg-grayish-50 dark:bg-blueish-500 rounded-bl-md pl-5 py-3.5 text-grayish-300 dark:text-blueish-300 md:py-4">
          5 items left
        </div>
        <div className="order-last md:order-none flex w-full md:flex-1 items-center justify-center rounded-md md:rounded-none bg-grayish-50 dark:bg-blueish-500 mt-4 md:mt-0 space-x-4 text-grayish-300 dark:text-blueish-300 font-bold py-3.5 md:py-4">
          <div className="text-crayola">All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div className="flex-1 bg-grayish-50 dark:bg-blueish-500 rounded-br-md text-end text-grayish-300 dark:text-blueish-300 pr-5 py-3.5 md:py-4">
          Clear Completed
        </div>
      </div>
    </>
  );
}
