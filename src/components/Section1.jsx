import Button from "./Button"

export default function Section1() {
    return (
        <section className="flex flex-col   mt-16  max-w-[95vw] lg:max-w-[85vw] justify-center items-center  mx-auto lg:flex-row-reverse lg:justify-between">
            <div className="lg:w-[50%] flex items-center lg:items-start  lg:justify-center  ">
                <img src="../images/illustration-intro.svg" alt="" />
            </div>
            <div className="lg:w-[50%]  flex flex-col items-center text-center  lg:text-start lg:items-start lg:justify-center">
                <h1 className="text-4xl lg:text-[4rem] lg:max-w-[20ch] text-DarkBlue font-bold m-4   lg:leading-[4rem]">Bring everyone together to build better products.</h1>
                <p className="mx-auto max-w-[30ch] text-DarkGrayishBlue mb-8 lg:mx-4">Mange make it simple for Softwere Teams To plan day to day while Keeping the larger team gowl in View</p>
                <Button />
            </div>
        </section>
    )
}