
export default function Profile(props) {
    if (props.id == 1)  {
        return (
            <article className="slide md:flex flex flex-col items-center justify-center gap-4 mx-8 text-center max-w-xl mb-16 ">
                <img className="w-[30%]" src={props.img} alt="" />
                <h1 className="text-DarkBlue font-bold">{props.name}</h1>
                <p className="text-DarkGrayishBlue/90 lg:max-w-[40ch]"> <q>
                We have been Able to cancel so many Subscribtion since using manage.
                    There is no more cross channel confusion and everyone is much more focused
    
                    </q> 
                </p>
            </article>
    
        )

    } else {
        return (
            <article className=" hidden md:flex slide flex flex-col items-center justify-center gap-4 mx-8 text-center max-w-xl mb-16 ">
                <img className="w-[30%]" src={props.img} alt="" />
                <h1 className="text-DarkBlue font-bold">{props.name}</h1>
                <p className="text-DarkGrayishBlue/90 lg:max-w-[40ch]" > <q>
                We have been Able to cancel so many Subscribtion since using manage.
                    There is no more cross channel confusion and everyone is much more focused
    
                    </q> 
                </p>
            </article>
    
        )

    }
    

}

