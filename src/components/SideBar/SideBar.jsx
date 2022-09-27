import React from 'react'
import { NavLink } from "react-router-dom";
import './sidebar.scss'
export default function SideBar() {
  return (
    <div className="sidebar__links">
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/"
        >
          Переглянути все
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/sale"
        >
          Sale
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/Bestsellers"
        >
          Bestsellers
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/trousers"
        >
          Брюки
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/jeans"
        >
          Джинси
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/dresses"
        >
          Сукні
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/t-shirt"
        >
          Футболки
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/tops-sweatshirt"
        >
          Топи і світшоти
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/outerwear"
        >
          Верхній одяг
        </NavLink>
        <NavLink
          className="sidebar__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/favourites"
        >
          Favourite
        </NavLink>
      </div>
  )
}

