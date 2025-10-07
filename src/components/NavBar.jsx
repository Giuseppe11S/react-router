// import di nav link
import {Link, NavLink } from "react-router-dom";


// Links che andranno nella navbar
const navlinks = [
  {path: '/', label: 'Home'},
  {path: '/about', label: 'About'},
];

export default function Navbar  () {
  return (
    <nav>
      <ul>
      {navlinks.map(link => (
      <li key={link.path}>
        <NavLink to={link.path}>{link.label}</NavLink>
      </li>
      ))}
      </ul>
    </nav>
  )
}