export const Vaccination = () => {
  return (
    <div className="w-full flex">
      <div className=" p-4 w-full max-w-lg h-full md:h-auto">
        <div className=" p-4 rounded-lg border-2 border-cl-success shadow md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 ">
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

      <div className=" p-4 w-full max-w-lg h-full md:h-auto">
        <div className=" p-4 border-2 border-cl-success rounded-lg shadow md:p-8">
          <div className="mb-4">
            <h3 className="mb-3 text-2xl font-bold text-cl-title ">
              Щеплення проти сказу
            </h3>
          </div>
          <ul>
            <li className="flex justify-between">
              <p className="text-cl-main text-xl">Дата щеплення</p>
              <p className="text-cl-main text-xl">25.08.2021</p>
            </li>
            <li className="flex justify-between">
              <p className="text-cl-main text-xl">Діє з</p>
              <p className="text-cl-main text-xl">25.09.2021</p>
            </li>
            <li className="flex justify-between">
              <p className="text-cl-main text-xl">Діє до</p>
              <p className="text-cl-main text-xl">25.08.2022</p>
            </li>
            <li className="flex justify-between">
              <p className="text-cl-main text-xl">Виробник і назва вакцини</p>
              <p className="text-cl-main text-xl">Рабіген Моно</p>
            </li>
            <li className="flex justify-between">
              <p className="text-cl-main text-xl">Номер партії</p>
              <p className="text-cl-main text-xl">8BXN</p>
            </li>
          </ul>
        </div>
      </div>

      <div className=" p-4 w-full max-w-lg h-full md:h-auto">
        <div className=" p-4 bg-cl-success rounded-lg shadow md:p-8">
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
  );
};
