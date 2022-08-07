import React, { useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import drawerBackground from "../assets/background-menu.png"
import { useNavigate } from "react-router-dom"

function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="w-screen bg-slate-400 flex flex-col justify-between relative ">
      <div className="flex items-center justify-between m-3">
        <div className="flex items-center">
          <img
            src={require("../assets/urbanice-logo.webp")}
            alt="logo"
            className="h-12 hover:cursor-pointer"
            onClick={() => navigate("home")}
          />
          <ul className="hidden sm:flex sm:text-white sm:text-md sm:ml-7">
            <li
              className="mx-3 hover:underline hover:cursor-pointer"
              onClick={() => navigate("home")}
            >
              Home
            </li>
            <li
              className="mx-3 hover:underline hover:cursor-pointer"
              onClick={() => navigate("A2")}
            >
              Assignment 2
            </li>
            <li
              className="mx-3 hover:underline hover:cursor-pointer"
              onClick={() => navigate("A3")}
            >
              Assignment 3
            </li>
          </ul>
        </div>
        <MenuIcon
          className="text-white w-6 h-6 hover:cursor-pointer hover:shadow-md sm:hidden"
          onClick={() => setMenuOpen(true)}
        />
      </div>
      {/* <ul className="hidden sm:list-disc sm:flex sm:text-white sm:text-xl">
        <li className="mx-7" onClick={() => navigate("home")}>
          Home
        </li>
        <li className="mx-7" onClick={() => navigate("A2")}>
          Assignment 2
        </li>
        <li className="mx-7" onClick={() => navigate("A3")}>
          Assignment 3
        </li>
      </ul> */}
      <div
        className={
          menuOpen
            ? "absolute w-[300px] h-screen right-0 sm-hidden bg-white"
            : "hidden"
        }
        style={{
          backgroundImage: `url(${drawerBackground})`,
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-end m-3 mt-5 absolute right-0">
          <XIcon
            className="text-zinc-600 w-6 h-6 hover:cursor-pointer hover:shadow-md sm:hidden"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-3 mt-5 text-zinc-700 text-xl pr-5">
          <li
            className="mx-7 hover:cursor-pointer p-3 hover:bg-emerald-600 rounded-md"
            onClick={() => {
              navigate("home")
              setMenuOpen(false)
            }}
          >
            Home
          </li>
          <li
            className="mx-7 hover:cursor-pointer p-3 hover:bg-emerald-600 rounded-md"
            onClick={() => {
              navigate("A2")
              setMenuOpen(false)
            }}
          >
            Assignment 2
          </li>
          <li
            className="mx-7 hover:cursor-pointer p-3 hover:bg-emerald-600 rounded-md"
            onClick={() => {
              navigate("A3")
              setMenuOpen(false)
            }}
          >
            Assignment 3
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderComponent
