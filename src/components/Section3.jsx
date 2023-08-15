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
        return <Profile key= {path.id} img = {path.img} name = {path.name} />
    })



    return (
        <section className="mt-24  max-w-[95vw] lg:max-w-[85vw] mx-auto flex flex-col items-center mb-24">
            <h1 className="text-4xl text-DarkBlue text-center mb-16 font-bold">What they've said</h1>
            <div className="lg:grid lg:grid-cols-4 gap-4">
            {profiles}

            </div>
            
            <Button />
        </section>
    ) 

    
}