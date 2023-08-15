import Navigation from "./Navigation"
import Button from './Button'
import {useState} from "react"

export default function Header() {
    const [menuState, setMenuState] = useState(true)
    function changeMenustate() {
        setMenuState( prevstate => !prevstate)
    }

    function showMenu(e) {
        changeMenustate()
        let element = e.target
        let elementMenu = element.parentElement.querySelector(".menu")
        let elementCross = element.parentElement.querySelector(".cross")
        let navItem = document.querySelector(".navItems")


        if (menuState) {
            elementMenu.classList.add("hidden")
            elementCross.classList.remove("hidden")
            elementCross.classList.add("block")
            navItem.classList.toggle("hidden")

        } else if (!menuState) {
            elementMenu.classList.remove("hidden")
            elementCross.classList.remove("block")
            elementCross.classList.add("hidden")
            navItem.classList.toggle("hidden")
        }
        
    }


    return (
        <section className=" relative  max-w-[90vw] lg:max-w-[85vw] mx-auto flex items-center mt-12 px-4 justify-between">
            <img src="../images/logo.svg" alt="" />
            <Navigation />
            <button className="bg-BrightRed  hidden lg:block text-VaryLightGray 
            py-4 px-12 rounded-full shadow hover:bg-BrightRed/50">
                Get Started
            </button>
            <div>
                <img  onClick = {showMenu} className="menu lg:hidden" src="../images/icon-hamburger.svg" alt="" />
                <img  onClick = {showMenu}  className="cross hidden lg:hidden" src="../images/icon-close.svg" alt="" />
            </div>

        </section>
    )
}
