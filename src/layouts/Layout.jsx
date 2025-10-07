import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";


export default function Layout () {
  return (
    <>
    <NavBar></NavBar>
    <main> <Outlet /> {/* Qui verranno renderizzate le pagine come HomePage o AboutUs */}</main>
    </>
  )
}