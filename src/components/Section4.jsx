import Button from "./Button"

export default function Section4() {
    return (
        <section className="flex flex-col items-center bg-BrightRed justify-center h-[25rem] gap-8 lg:flex-row lg:justify-between px-[8vw]">
            <h1 className="text-4xl font-bold text-VaryLightGray text-center mx-8 max-w-[20ch] lg:text-start">Simplify How your team Works Today.</h1>
            <button className="bg-VaryLightGray  text-BrightRed
            py-4 px-12 rounded-full shadow hover:bg-VaryLightGray/70">
                Get Started
            </button>
        </section>

    )

}