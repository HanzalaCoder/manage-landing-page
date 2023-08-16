
export default function Foooter() {
    const year = new Date().getFullYear()
    function submitForm() {
        const inputFied = document.querySelector(".input")
        if (!inputFied.value ) {
            inputFied.classList.add("border-solid")
            inputFied.classList.add("border-4")
            inputFied.classList.add("border-BrightRed")
            inputFied.placeholder = "Please give proper email"
        } else {
            inputFied.classList.remove("border-solid")
            inputFied.classList.remove("border-4")
            inputFied.classList.remove("border-BrightRed")
            inputFied.placeholder = "Enter Your Email to Get updaes.."
        }
    }

    return (
        <section className="bg-VeryDarkBlue text-VaryLightGray md:grid gap-8 py-12 lg:pt-24 md:grid-cols-3 md:grid-rows-2 md:place-items-center  md:max-h-[15rem] lg:px-16">
            <div className="flex gap-2 justify-center w-[95%] mx-auto col-start-3 ">
                <input type="email" className=" input w-[100%] rounded-full p-2 text-DarkGrayishBlue"  required placeholder="Enter Your Email to Get updaes.."/>
                <button className="py-4 px-8 bg-BrightRed rounded-full" onClick={submitForm}>Go</button>
            </div>
            <div className="flex justify-between w-[80%] mx-auto mt-8 col-start-2 col-end-2 row-start-1 row-end-2">
            <ul className="flex flex-col gap-4 text-DarkGrayishBlue">
                <li>Home</li>
                <li>Piracy</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
            <ul className="flex flex-col gap-4 text-DarkGrayishBlue">
                <li>Careers</li>
                <li>Community</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
           
            <div className="flex flex-col-reverse items-center  col-start-1 col-end-1 row-start-1 row-end-2 w-[70%] mx-auto">
                <img className="font-bold" src="../images/logo.svg" alt="" />
                <div className="flex justify-between w-[80%] my-8 lg:mb-24">
                    <a href=""><img src="../images/icon-facebook.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-youtube.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-instagram.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-pinterest.svg" alt="" /></a>
                    <a href=""><img src="../images/icon-facebook.svg" alt="" /></a>
                </div>

            </div>
            <h4 className="text-center text-DarkGrayishBlue col-start-3 mt-14">Copyright{year}. All Rights Reserved</h4>
        </section>
    )

}