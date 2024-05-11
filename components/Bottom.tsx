import Image from 'next/image';

export default function Bottom() {
    return(
        <div className="h-2/6 w-screen flex flex-col md:flex-row">
            <div className="  w-full md:w-8/12 flex flex-col md:flex-row">
                <div className=" w-full md:w-[40%] h-full">
                    <Image src="/images/image-about-dark.jpg" priority alt="dark" width={1000} height={1000} className=' w-full h-full object-fill' />
                </div>
                <div className=' md:py-0 py-10 w-full md:w-[60%] flex space-y-3 justify-center px-10 flex-col'>
                    <h1 className=' md:text-base lg:text-xl font-bold tracking-[.5rem]'>
                        ABOUT OUR FURNITURE
                    </h1>
                    <p className=' md:text-sm lg:text-base '>
                        Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                        
                    </p>
                </div>
            </div>
            <div className=' w-full md:w-4/12'>
                <Image src="/images/image-about-light.jpg" priority alt="white" width={1000} height={1000} className=' w-full h-full object-fill' />
            </div>
        </div>
    )
}