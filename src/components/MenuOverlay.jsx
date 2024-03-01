import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ( {links} ) => {
  return (
    <ul className="flex flex-col py-4 item-center block md:hidden">
        {links.map((link, index) => (
            <li className="font-bold" key={index}>
        <NavLink href={link.path} title={link.title} />
        </li>
        ))}
        </ul>
  )
}

export default MenuOverlay