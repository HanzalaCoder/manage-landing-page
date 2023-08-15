

export default function Navigation() {
    return (
        <ul className=" navItems hidden absolute top-16 left-0 right-0 mx-auto
         bg-VaryLightGray flex items-center justify-center flex-col gap-6 py-8  rounded shadow-2xl shadow-[#333]
          text-DarkBlue font-bold lg:static lg:flex lg:flex-row  lg:bg-opacity-0 lg:shadow-none self-center">
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
        </ul>
    )

}