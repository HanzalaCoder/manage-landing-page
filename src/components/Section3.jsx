import Profile from "./Profile"
import Button from "./Button"


export default function Section3() {
    const paths = [
        {   id : 1,
            img:"../images/avatar-anisha.png",
            name:"Anisha Li",
        },
        {   
             id : 2,
            img:"../images/avatar-ali.png",
            name:"Ali Bravo",
        },
        {    id : 3,
            img:"../images/avatar-richard.png",
            name:"Richard Watts",
        },
        {    id : 4,
            img:"../images/avatar-shanai.png",
            name:"Shanai Gough",
        },
    ]

    const profiles = paths.map(path => {
        return <Profile key= {path.id} id = {path.id} img = {path.img} name = {path.name} />
    })

    function  addHiddeen() {
        const ProfilesList = document.querySelectorAll(".slide")
        ProfilesList[0].classList.remove("hidden")
    }
  
    let currentIndex = 0
  
    function moveRight() {
        const ProfilesList = document.querySelectorAll(".slide")
        ProfilesList[currentIndex].classList.add("hidden")
        currentIndex = (currentIndex + 1) % ProfilesList.length
        ProfilesList[currentIndex].classList.remove("hidden")
    }
    function moveLeft() {
        const ProfilesList = document.querySelectorAll(".slide")
        ProfilesList[currentIndex].classList.add("hidden")
        currentIndex = (currentIndex - 1 + ProfilesList.length) % ProfilesList.length
        ProfilesList[currentIndex].classList.remove("hidden")
    }

    return (
        <section className="mt-24  max-w-[95vw] lg:max-w-[85vw] mx-auto flex flex-col items-center mb-24">
            <h1 className="text-4xl text-DarkBlue text-center mb-16 font-bold">What they've said</h1>
            <div className="lg:grid lg:grid-cols-3 gap-4 w-[80vw] place-content-between mx-auto">
            {profiles}

            </div>
            <div className=" lg:hidden flex gap-4 bg-BrightRed text-VaryLightGray  mb-12 py-4 px-8 rounded-full"> 
                <i className="fa-solid fa-arrow-left text-3xl pr-4" onClick= {moveLeft}></i>
                <i className="fa-solid fa-arrow-right text-3xl pl-4" onClick= {moveRight}></i>
            </div>
            
            <Button />
        </section>
    ) 

    
}