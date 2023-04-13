export const Vaccination = () => {
  return (
    <div>
      <div className="w-full md:inset-0 h-modal md:h-full">
        <div className=" p-4 w-full max-w-lg h-full md:h-auto">
          <div className=" p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
            <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Щеплення проти сказу
              </h3>
            </div>
            <ul>
              <li className="flex justify-between">
                <p>Дата щеплення</p> <p>25.08.2021</p>
              </li>
              <li className="flex justify-between">
                <p>Діє з</p> <p>25.09.2021</p>
              </li>
              <li className="flex justify-between">
                <p>Діє до</p> <p>25.08.2022</p>
              </li>
              <li className="flex justify-between">
                <p>Виробник і назва вакцини</p> <p>Рабіген Моно</p>
              </li>
              <li className="flex justify-between">
                <p>Номер партії</p> <p>8BXN</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
