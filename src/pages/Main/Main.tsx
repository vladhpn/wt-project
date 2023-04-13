import { MainInfo } from '../../components/MainInfo/MainInfo';
import { Vaccination } from '../../components/Vaccination/Vaccination';

const Main = () => {
  return (
    <div className="container mx-auto">
      <MainInfo />
      <Vaccination />
      {/* <div className=" p-4 w-[280px]">
        <div className=" p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Вага
            </h3>
            <p className="text-xl  text-gray-900 dark:text-white">4 кг</p>
          </div>
        </div>
      </div>

      <div className="p-4 w-[280px]">
        <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Зріст
            </h3>
            <p className="text-xl text-gray-900 dark:text-white">30 см</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
