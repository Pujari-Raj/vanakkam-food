import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const LandingPage = () => {
    const [content, setContent] = useState("Unexpected guests?");


    useEffect(() => {
        const intervalId = setInterval(() => {
            const contentOptions = ["Cooking gone wrong?", "Game night?", "Hungry?", "Movie marathon?", "Late night at office?", "Unexpected guests?"];

            //
            const randomIndex = Math.floor(Math.random() * contentOptions.length);

            setContent(contentOptions[randomIndex]);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {/* Main-Div */}
            <section className="relative flex w-full ">
                {/* left-content */}
                <div className=" p-8">
                    <div className="flex gap-[15rem] items-center">
                        <div className="">
                            <img src="../src/assets/Vanakkam.png" className="w-[15rem] h-auto" alt="web-logo" srcset="" />
                        </div>
                        <div className="flex gap-4">
                            <button className="font-bold">Login</button>
                            <button className="font-bold bg-black text-white p-[0.7rem] hover:bg-orange-500">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="my-8 mx-2">
                        <h1 className="font-extrabold text-[2rem]">{content}</h1>
                        <h2 className="font-base mt-2 text-2xl text-[#686b78]">
                            Order food from favourite restaurants near you.
                        </h2>
                        <div className="mt-8">
                            <h2 className="font-medium text-[#a9abb2]">
                                POPULAR CITIES IN INDIA
                            </h2>
                            <div className="">

                            </div>
                            <div className="mt-4 w-[90%] flex flex-wrap gap-x-2 text-sm font-extrabold text-defGray 
                            [&>*:nth-child(odd)]:text-[#36454f] [&>*:nth-child(even)]:text-[#93959f]">
                                <span>Ahmedabad</span>
                                <span>Bangalore</span>
                                <span>Chennai</span>
                                <span>Delhi</span>
                                <span>Gurgaon</span>
                                <span>Hyderabad</span>
                                <span>Kolkata</span>
                                <span>Mumbai</span>
                                <span>Pune</span>
                                <span>& more.</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right-content */}
                <div className="absolute bg-no-repeat h-full bg-cover bg-[100%] bg-[hsla(26,5%,70%,0.2)] left-[calc(50%_+_80px)] right-0 top-0
                bg-[url('../src/assets/main-banner.webp')] 
                 md:w-[20%] lg:w-[30%] xl:w-[43.6%]"></div>
            </section>
            {/*  */}
            <section className="flex h-full w-full flex-col justify-between bg-[#2b1e16] px-16 pb-16 text-white md:flex-row">
                <div className="text-center">
                    <div className="">
                        <img src="src/assets/banner.png" className="w-[12rem] h-auto" alt="web-logo" srcset="" />
                    </div>
                    <h2 className="text-xl font-semibold">No Minimum Order</h2>
                    <p className="mt-2 text-sm text-[#e0cbc1]">
                        Order in for yourself or for the group,
                    </p>
                    <p className="text-sm text-[#e0cbc1]">
                        with no restrictions on order value
                    </p>
                </div>
                <div className="text-center">
                    <div className="">
                        <img src="src/assets/mid-banner1.png" className="w-[15rem] h-auto" alt="web-logo" srcset="" />
                    </div>
                    <h2 className="text-xl font-semibold">Live Order Tracking</h2>
                    <p className="mt-2 text-sm text-[#e0cbc1]">
                        Know where your order is at all times,
                    </p>
                    <p className="text-sm text-[#e0cbc1]">
                        from the restaurant to your doorstep
                    </p>
                </div>
                <div className="text-center">
                    <div className="">
                        <img src="src/assets/mid-banner2.png" className="w-[15rem] h-auto" alt="web-logo" srcset="" />
                    </div>
                    <h2 className="text-xl font-semibold">Lightning-Fast Delivery</h2>
                    <p className="mt-2 text-sm text-[#e0cbc1]">
                        Experience Swiggy's superfast delivery
                    </p>
                    <p className="text-sm text-[#e0cbc1]">
                        for food delivered fresh & on time
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default LandingPage;
