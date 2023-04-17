import './MainInfo.scss';

export const MainInfo = () => {
  return (
    <div className="main_container">
      <div className="p-3">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            width={350}
            height={350}
            src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80"
          />
        </div>
      </div>
      <div className="p-3 row-span-4 col-span-4">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="form_label">
                Кличка
              </label>
              <input
                value={'Marsel'}
                type="text"
                id="first_name"
                className="form_input"
                placeholder="First name"
                required
                disabled={true}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="form_label">
                Вид
              </label>
              <input
                value={'Кіт'}
                type="text"
                id="last_name"
                className="form_input"
                placeholder="Вид"
                required
                disabled={true}
              />
            </div>

            <div>
              <label htmlFor="last_name" className="form_label">
                Порода
              </label>
              <input
                value={'Кіт свійський'}
                type="text"
                id="last_name"
                className="form_input"
                placeholder="Порода"
                required
                disabled={true}
              />
            </div>

            <div>
              <label htmlFor="last_name" className="form_label">
                Стать
              </label>
              <input
                value={'Чоловіча'}
                type="text"
                id="last_name"
                className="form_input"
                placeholder="Стать"
                required
                disabled={true}
              />
            </div>

            <div>
              <label htmlFor="last_name" className="form_label">
                Вік
              </label>
              <input
                value={'2 роки'}
                type="text"
                id="last_name"
                className="form_input"
                placeholder="Вік"
                required
                disabled={true}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="form_label">
                Дата народження
              </label>
              <input
                value={'02.10.2018'}
                type="text"
                id="last_name"
                className="form_input"
                placeholder="Дата народження"
                required
                disabled={true}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="form_label">
                Вага
              </label>
              <input
                value={'5.4 кг'}
                type="text"
                id="last_name"
                className="form_input"
                placeholder="Вага"
                required
                disabled={true}
              />
            </div>

            <div>
              <label htmlFor="last_name" className="form_label">
                Зріст
              </label>
              <input
                value={'35 см'}
                type="text"
                id="last_name"
                className="form_input"
                placeholder="Зріст"
                required
                disabled={true}
              />
            </div>
          </div>
        </form>
      </div>

      {/* <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button> */}
    </div>
  );
};
