import Navigation from "./Navigation"
import Button from './Button'

export default function Header() {
    return (
        <section>
            <img src="../images/logo.svg" alt="" />
            <Navigation />
            <Button />
            <div>
                <img src="../images/icon-hamburger.svg" alt="" />
                <img src="../images/icon-close.svg" alt="" />
            </div>

        </section>
    )
}
