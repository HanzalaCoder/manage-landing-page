
export default function Foooter() {
    const year = new Date().getFullYear()
    return (
        <section>
            <div>
                <input type="text" />
                <button>Go</button>
            </div>
            <ul>
                <li>Home</li>
                <li>Piracy</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
            <ul>
                <li>Careers</li>
                <li>Community</li>
                <li>Privacy Policy</li>
            </ul>
            <div>
                <img src="../images/logo.svg" alt="" />
                <div>
                    <a href=""><img src="../images/icon-facebook.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-youtube.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-instagram.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-pinterest.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-facebook.svg" alt="" /></a>
                </div>

            </div>
            <h4>Copyright{year}. All Rights Reserved</h4>
        </section>
    )

}