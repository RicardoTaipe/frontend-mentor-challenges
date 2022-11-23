import iconCross from '../images/icon-cross.svg'

export default function TodoList() {
    return (
        <>
            <div className="divide-y bg-grayish-50 dark:bg-blueish-500 rounded-t-md divide-grayish-100 dark:divide-blueish-400">
                <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
                    <input type="checkbox" name=""
                        className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0" />
                    <p className="flex-1 ml-3">Complete online JavaScript course</p>
                    <img src={iconCross} alt="remove" className="w-3" />
                </div>
                <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
                    <input type="checkbox" name=""
                        className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0" />
                    <p className="flex-1 ml-3">Jog around the park 3x</p>
                    <img src={iconCross} alt="remove" className="w-3" />
                </div>
                <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
                    <input type="checkbox" name=""
                        className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0" />
                    <p className="flex-1 ml-3">10 minutes meditation</p>
                    <img src={iconCross} alt="remove" className="w-3" />
                </div>
                <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
                    <input type="checkbox" name=""
                        className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0" />
                    <p className="flex-1 ml-3">Read for 1 hour</p>
                    <img src={iconCross} alt="remove" className="w-3" />
                </div>
                <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
                    <input type="checkbox" name=""
                        className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0" />
                    <p className="flex-1 ml-3">Pick up groceries</p>
                    <img src={iconCross} alt="remove" className="w-3" />
                </div>
                <div className="flex justify-between items-center px-5 py-3.5 md:py-[18px]">
                    <input type="checkbox" name=""
                        className="bg-inherit border-grayish-200 dark:border-blueish-400 p-2.5 rounded-full checked:bg-brand-gradient focus:ring-0 focus:ring-offset-0" />
                    <p className="flex-1 ml-3">Complete Todo App on Frontend Mentor</p>
                    <img src={iconCross} alt="remove" className="w-3" />
                </div>
            </div>
        </>
    )
}
