import petIcon from '../../assets/pets-icon.svg';

export const MainInfo = () => {
  return (
    <div className="p-4 full-w">
      <div className=" p-4 rounded-lg shadow bg-violet-500 md:p-8">
        <div className=" text-sm font-light text-gray-500 dark:text-gray-400 sm:columns-2 md:columns-2 lg:flex items-center justify-between">
          <div className="flex items-center mb-4 lg:mb-0">
            <img
              className="w-20 h-20 rounded-full"
              src={petIcon}
              alt="Rounded avatar"
            />
            <h3 className="ml-4 text-4xl font-bold text-white ">Марсель</h3>
          </div>

          <div className="mb-4 lg:mb-0">
            <p className="mb-2 text-xl text-stone-700">Вид</p>
            <p className="text-xl  text-white ">Кіт</p>
          </div>
          <div className="mb-4 lg:mb-0">
            <p className="mb-2 text-xl  text-stone-700 ">Порода</p>
            <p className="text-xl  text-white ">Кіт свійський</p>
          </div>
          <div className="mb-4 lg:mb-0">
            <p className="mb-2 text-xl  text-stone-700 ">Стать</p>
            <p className="text-xl  text-white ">Чоловіча</p>
          </div>
          <div className="mb-4 lg:mb-0">
            <p className="mb-2 text-xl  text-stone-700 ">Вік</p>
            <p className="text-xl  text-white">2 роки</p>
          </div>
          <div className="mb-4 lg:mb-0">
            <p className="mb-2 text-xl text-stone-700">Дата народження</p>
            <p className="text-xl  text-white">02.10.2018</p>
          </div>
          <div className="mb-4 lg:mb-0">
            <p className="mb-2 text-xl  text-stone-700">Вага</p>
            <p className="text-xl  text-white">5.4 кг</p>
          </div>
          <div className="mb-4 lg:mb-0">
            <p className="mb-2 text-xl text-stone-700">Зріст</p>
            <p className="text-xl text-white">35 см</p>
          </div>
        </div>
      </div>
    </div>
  );
};
