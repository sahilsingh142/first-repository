import { useRef } from "react";
import { Link } from "react-router";
import mainImage from "./image/main.png"
function Home() {
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const img = imgRef.current;
        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Ignore right side completely
        if (x > rect.width / 2) {
            img.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
            return;
        }

        const percentY = (y / rect.height - 0.5) * 2;

        const rotateX = percentY * 12;   // top / bottom tilt
        const rotateY = 12;              // constant left tilt
        const scale = 1.06;

        img.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `;
    };

    const handleMouseLeave = () => {
        imgRef.current.style.transform =
            "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    };


    return (
        <>
            <div className="w-full h-screen bg-black">
                {/* Nav Starts */}
                <nav className="w-full">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                        <div className="text-2xl font-bold text-white">
                            Future <span className="text-3xl">CV</span>
                        </div>

                        <ul className="hidden md:flex space-x-8 text-white font-medium">
                            {["Home", "About", "Resume", "Contact"].map((item) => (
                                <li
                                    key={item}
                                    className="relative cursor-pointer hover:text-neutral-300 transition
                         after:content-[''] after:absolute after:w-0 after:h-0.5
                         after:bg-neutral-300 after:left-0 after:-bottom-1
                         hover:after:w-full after:transition-all after:duration-400"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex space-x-4">
                            <Link to='/LoginPage' className="px-4 py-1 md:px-8 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300">
                                Login
                            </Link>

                            <Link to='/RegisterPage' className="px-4 py-1 md:px-8 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </nav>
                {/* Nav Ends */}

                <section className="w-full h-[90%]">
                    <div className="max-w-9xl h-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
                        <div className="px-15 py-20 md:mb-15">
                            <div>
                                <p className="font-medium">Finally,</p>
                            </div>

                            <div>
                                <h1 className="text-5xl font-bold ">A 100% FREE Online Resume Builder</h1>
                            </div>

                            <div>
                                <p className="mt-8 ">Create professional resumes quickly with our easy resume builder. Choose modern templates, customize details, and download instantly to stand out and apply confidently for your dream job</p>
                            </div>
                            <div className=" mt-15 grid grid-cols-1 md:grid-cols-2 flex-wrap gap-10">
                                <Link to="/FirstTemp" className="bg-white text-black py-3 md:py-2.5 rounded-xl font-medium hover:scale-95 duration-300 cursor-pointer hover:bg-neutral-200 text-xl text-center">
                                    Create Resume Now
                                </Link>
                                <button className="border-b border-white font-medium hidden md:flex justify-center text-xl cursor-pointer hover:text-2xl hover:border-neutral-300 hover:text-neutral-200 duration-300  ">Choose Tamplate</button>
                            </div>
                        </div>

                        <div className="hidden md:flex justify-center items-center h-full ">
                            <div
                                className="h-full overflow-hidden" >
                                <img
                                    ref={imgRef}
                                    src={mainImage}
                                    alt="3d stretch"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    className="w-full h-[94%] object-fill transition-transform duration-400 ease-out  rounded-md mt-15 ml-20"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Second Section */}
            <div className="w-full h-screen bg-black">
                <div className="flex justify-center text-white ">
                    <h1 className="md:mt-25 mt-8 font-mono text-xl">FutureCV has helped people land jobs at these great companies:</h1>
                </div>
                <div className="md:flex justify-evenly text-white mt-8">
                    <h1 className="md:text-5xl text-4xl font-medium">Google</h1>
                    <h1 className="md:text-5xl text-4xl font-light">POSTMAN</h1>
                    <h1 className="md:text-5xl text-4xl font-extrabold">amazon</h1>
                    <h1 className="md:text-5xl text-4xl tracking-wider">zalondo</h1>
                    <h1 className="md:text-5xl text-4xl font-extrabold tracking-tighter">twilio</h1>
                </div>

                <div className=" md:flex justify-center text-white mt-20 font-medium">
                    <h1 className="md:w-[32%] w-[70%]">The only Future CV generator completely free. We are supported just through you donations. No upsells.</h1>
                </div>

                <div className="md:flex justify-evenly text-white items-center mt-10 md:mt-65">
                    <div>
                        <h1 className="md:text-6xl text-4xl font-extrabold">100% free</h1>
                        <p className="text-neutral-400">and you support</p>
                    </div>
                    <div>
                        <h1 className="md:text-6xl text-4xl font-extrabold">No upsells</h1>
                        <p className="text-neutral-400">No upsells no ads</p>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className="w-full h-screen bg-black grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="w-full text-white ml-15 mt-40">
                    <h1 className="text-4xl font-medium tracking-wider">Tamplates</h1>
                    <p className="w-[74%] mt-3 font-mono">Explore some of the templates available in FutureCv and view the resumes generated with them. You can customize absolutely everything for your CV - the sections, number rows and columns, number of pages and even the colors.</p>
                </div>

                <div className="relative w-full h-screen">
                    <div className="absolute inset-0 bg-linear-to-r from-black/96 via-black/40 to-transparent z-10"></div>
                    <div className="relative w-full h-full bg-neutral-300 z-0">
                        {/* content */}
                    </div>
                </div>
            </div>
            
            {/*Last Section */}
            <div className="w-full h-screen bg-black text-white flex justify-center items-center">
                <div className="w-full h-[55%] bg-linear-to-r from-neutral-950 to-neutral-900 flex flex-col justify-center">
                    <h1 className="text-6xl font-medium ml-15">About FutureCv</h1>
                    <p className="font-mono font-medium ml-15 text-sm w-[80%] mt-8">FutureCv is a 100% free platform for building and generating beautiful resumes, online. Supported by the sharing, it is a way to fullfil our mission of creating career development tools, for everyone.</p>
                </div>
            </div>
            
            {/*Last Mini Section */}
            <div className="w-full h-85 bg-black">
                            
            </div>
        </>
    )
}

export default Home