import Profile from "./Profile"
import Button from "./Button"


export default function Section3() {
    const paths = [
        {
            img:"../images/avatar-anisha.png",
            name:"Anisha Li",
        },
        {
            img:"../images/avatar-ali.png",
            name:"Ali Bravo",
        },
        {
            img:"../images/avatar-richard.png",
            name:"Richard Watts",
        },
        {
            img:"../images/avatar-shanai.png",
            name:"Shanai Gough",
        },
    ]

    const profiles = paths.map(path => {
        return <Profile img = {path.img} name = {path.name} />
    })



    return (
        <section>
            <h1>What they've said</h1>
            {profiles}
            <Button />
        </section>
    )

    
}