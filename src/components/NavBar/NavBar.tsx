import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

import { Sidebar } from '../Sidebar/SideBar';

import './NavBar.scss';

export const NavBar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: 'undefined' }}>
        <div className="navbar_container">
          <ul className="navbar_list">
            {Sidebar.map(({ title, id, path, icon }) => {
              return (
                <div key={id}>
                  <Link to={path} className="navbar_item ">
                    <span className="mr-2">{title}</span>
                    <p>{icon}</p>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};
