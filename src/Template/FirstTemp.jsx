import { useState, useRef } from "react"

const FirstTemp = () => {
    const [name, useName] = useState('');
    const [proffession, useProffession] = useState('');
    const [phone, usePhone] = useState('');
    const [email, useEmail] = useState('');
    const [country, useCountry] = useState('');
    const [git, useGit] = useState('');
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [languageInput, setlanguageInput] = useState("");
    const [languageItems, setLanguageItems] = useState([]);
    const [summeryData, setSummeryData] = useState(null);
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [startEndDate, setStateEndDate] = useState('');
    const [location, setLocation] = useState('');
    const [companyDescription, setCompanyDescription] = useState(null);
    const [projectName, setProjectName] = useState('');
    const [projectStartEndDate, setProjectStateEndDate] = useState('');
    const [projectDescription, setProjectDescription] = useState(null);
    const [projectAllData, setProjectAllData] = useState([]);
    const [collageName, setCollageName] = useState('');
    const [degree, setDegree] = useState('');
    const [completeDate, setCompleteDate] = useState('');

    const handleAdd = () => {
        if (input.trim() === "") return;

        setItems([...items, input]);
        setInput(""); // clear input
    };

    const handleLanguagebox = () => {
        if (languageInput.trim() === "") return;
        setLanguageItems([...languageItems, languageInput]);
        setlanguageInput('');
    }

    const showRef = useRef(null);
    const handleSummery = (e) => {
        setSummeryData(showRef.current.innerText);
    }

    const editorRef = useRef(null);
    const handleCompanyExprience = (e) => {
        setCompanyDescription(editorRef.current.innerText);
    }

    const editorProjectRef = useRef(null);
    const handleProjectdetail = (e) => {
        setProjectDescription(editorProjectRef.current.innerText);
    }

    const handleAddProject = () => {

        if (!projectName && !projectStartEndDate && !projectDescription) return;

        const addProject = {
            name: projectName,
            endData: projectStartEndDate,
            projectDes: projectDescription
        }

        setProjectAllData((prev) => [...prev, addProject]);

        setProjectName("");
        setProjectStateEndDate("");
        editorProjectRef.current.innerText = "";
    }

    return (
        <>
            <div className="w-full h-full md:h-screen bg-black">
                <div className="px-2 py-2 h-full grid grid-cols-1 md:grid-cols-2 items-center text-white">

                    {/* Filling Information */}
                    <div className="w-full md:w-[85%] md:h-full bg-neutral-950 shadow-sm shadow-neutral-700 overflow-x-auto whitespace-nowrap">
                        {/*Information */}
                        <h1 className="text-3xl font-mono font-bold mt-5 ml-2">Information</h1>
                        <div className="h-[30%] grid grid-cols-1 md:grid-cols-2 mt-2">

                            <div className="flex flex-col m-4">
                                <span className="text-sm font-medium ml-3">Full Name</span>
                                <input
                                    className="border px-4 py-3 rounded-xl "
                                    onChange={(e) => useName(e.target.value)}
                                    type="text"
                                    placeholder="Atul Singh"
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <span className="text-sm font-medium ml-3">Proffesion</span>
                                <input
                                    className="border px-4 py-3 rounded-xl "
                                    onChange={(e) => useProffession(e.target.value)}
                                    type="text"
                                    placeholder="Web Developer"
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <span className="text-sm font-medium ml-3">Phone No</span>
                                <input
                                    className="border px-4 py-3 rounded-xl"
                                    onChange={(e) => usePhone(e.target.value)}
                                    type="text"
                                    placeholder="444-555-666"
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <span className="text-sm font-medium ml-3">Email</span>
                                <input
                                    className="border px-4 py-3 rounded-xl "
                                    onChange={(e) => useEmail(e.target.value)}
                                    type="text"
                                    placeholder="email@gmail.com"
                                />
                            </div>
                            <div className="flex flex-col m-4">
                                <span className="text-sm font-medium ml-3">City</span>
                                <input
                                    className="border px-4 py-3 rounded-xl "
                                    onChange={(e) => useCountry(e.target.value)}
                                    type="text"
                                    placeholder="Delhi"
                                />
                            </div>
                            <div className="flex flex-col  m-4">
                                <span className="text-sm font-medium ml-3">GitHub</span>
                                <input
                                    className="border px-4 py-3 rounded-xl"
                                    onChange={(e) => useGit(e.target.value)}
                                    type="text"
                                    placeholder="https://github.com"
                                />
                            </div>
                        </div>

                        {/* Skill */}
                        <h1 className="font-mono text-3xl font-bold mt-20 md:mt-30 ml-2">Skill</h1>
                        <div>
                            <input className="border px-6 py-3 rounded-xl mt-3 ml-3"
                                type="text"
                                value={input}
                                placeholder="Type something..."
                                onChange={(e) => setInput(e.target.value)}
                            />

                            <button className="px-5 py-1 ml-4 mt-3 cursor-pointer  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300"
                                onClick={handleAdd} >
                                Add
                            </button>
                        </div>

                        {/* Language */}
                        <h1 className="font-mono text-3xl font-bold mt-15 ml-2">Language</h1>
                        <div>
                            <input className="border px-6 py-3 rounded-xl mt-3 ml-3"
                                value={languageInput}
                                onChange={(e) => setlanguageInput(e.target.value)}
                                type="text" placeholder="Language" />

                            <button className="px-5 py-1 ml-4 mt-3 cursor-pointer  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300"
                                onClick={handleLanguagebox}>Add</button>
                        </div>

                        {/* Summery scetion */}
                        <h1 className="font-mono text-3xl font-bold mt-15 ml-2">Summary</h1>
                        <div
                            ref={showRef}
                            contentEditable
                            onInput={handleSummery}
                            className="h-30 m-4 px-3 py-2 text-white overflow-hidden rounded-sm shadow shadow-white focus:outline-none">
                        </div>

                        {/* Experience */}
                        <h1 className="font-mono text-3xl font-bold mt-15 ml-2">Experience</h1>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">

                                <div className="flex flex-col mt-3">
                                    <span className="text-sm font-medium ml-3">Company Name</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl mt-1"
                                        type="text"
                                        placeholder="Microsoft"
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col mt-3">
                                    <span className="text-sm font-medium ml-3">Job Title</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl mt-1"
                                        type="text"
                                        placeholder="Web Developer"
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col mt-5">
                                    <span className="text-sm font-medium ml-3">Start Date - End Date</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl mt-1"
                                        type="text"
                                        placeholder="Feb 2024 - Dec 2024"
                                        onChange={(e) => setStateEndDate(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col mt-5">
                                    <span className="text-sm font-medium ml-3">Location</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl mt-1"
                                        type="text"
                                        placeholder="Delhi"
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col m-4">
                                <span className=" font-medium ml-3 mt-3">Company Description</span>
                                <div
                                    ref={editorRef}
                                    contentEditable
                                    onInput={handleCompanyExprience}
                                    className="h-20 mt-1 px-3 py-2 text-white overflow-hidden rounded-sm focus:outline-none bg-neutral-900">
                                </div>
                            </div>
                        </div>

                        {/* Project */}
                        <h1 className="font-mono text-3xl font-bold mt-20 ml-2">Project</h1>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">

                                <div className="flex flex-col mt-3">
                                    <span className="text-sm font-medium ml-3">Project Name</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl mt-1"
                                        type="text"
                                        value={projectName}
                                        placeholder="Music player"
                                        onChange={(e) => setProjectName(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col mt-4">
                                    <span className="text-sm font-medium ml-3">Start Date - End Date</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl"
                                        type="text"
                                        value={projectStartEndDate}
                                        placeholder="Feb 2024 - Marh 2024"
                                        onChange={(e) => setProjectStateEndDate(e.target.value)}
                                    />
                                </div>


                            </div>

                            <div className="flex flex-col m-4">
                                <span className=" font-medium ml-3 mt-3">Responsibility or Achievement </span>
                                <div
                                    ref={editorProjectRef}
                                    contentEditable
                                    onInput={handleProjectdetail}
                                    className="h-20 mt-1 px-3 py-2 text-white rounded-sm focus:outline-none bg-neutral-900 overflow-hidden">
                                </div>
                            </div>

                            <div className="flex justify-center ">
                                <button className="px-15 py-2 mt-2 cursor-pointer  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300"
                                    onClick={handleAddProject}
                                >Add</button>
                            </div>
                        </div>

                        {/* Education */}
                        <h1 className="font-mono text-3xl font-bold mt-20 ml-2">Educatin</h1>
                        <div>
                            <div className="grid grid-cols-1 gap-4 m-4">

                                <div className="flex flex-col mt-3">
                                    <span className="text-sm font-medium ml-3">Collage Name</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl mt-1"
                                        type="text"
                                        placeholder="University of Colorado"
                                        onChange={(e) => setCollageName(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col mt-3">
                                    <span className="text-sm font-medium ml-3">Dgree</span>
                                    <input
                                        className="border px-4 py-3 rounded-xl"
                                        type="text"
                                        placeholder="Bachelor of Computer Science"
                                        onChange={(e) => setDegree(e.target.value)}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="flex flex-col mt-4">
                                        <span className="text-sm font-medium ml-3">Date Complete</span>
                                        <input
                                            className="border px-4 py-3 rounded-xl"
                                            type="text"
                                            placeholder="Marh 2024"
                                            onChange={(e) => setCompleteDate(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col mt-4">
                                        <span className="text-sm font-medium ml-3">Location</span>
                                        <input
                                            className="border px-4 py-3 rounded-xl"
                                            type="text"
                                            placeholder="Delhi"
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full h-full bg-black hidden md:flex">
                        {/* Resume Page */}
                        <div className="w-[90%] bg-white shadow-2xl grid grid-cols-1 md:grid-cols-3 mt-10">
                            <aside className="bg-neutral-900 text-white p-8">
                                <h1 className={`text-2xl font-bold ${name ? "text-white" : "text-neutral-400"}`}>{name || "Rohan Kapur"}</h1>
                                <p className={`text-sm text-neutral-300 mt-1 ${proffession ? "text-white" : "text-neutral-400"} `}>{proffession || "Developer"}</p>

                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold border-b border-neutral-700 pb-1">Contact</h2>
                                    <ul className="text-sm mt-3 space-y-2">
                                        <li className={`${email ? "text-white" : "text-neutral-400"}`}>{email || "email@gmail.com"}</li>
                                        <li className={`${phone ? "text-white" : "text-neutral-400"}`}>{phone || "555-666-333"}</li>
                                        <li className={`${country ? "text-white" : "text-neutral-400"}`}>{country || "India"}</li>
                                        <li className={`${git ? "text-white" : "text-neutral-400"}`}> {git || "github"}</li>
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold border-b border-neutral-700 pb-1">Skills</h2>
                                    <ul className="text-sm mt-3 space-y-1">
                                        {items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold border-b border-neutral-700 pb-1">Languages</h2>
                                    <ul className="text-sm mt-3 space-y-1">
                                        {languageItems.map((items, index) => (
                                            <li key={index}>{items}</li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <main className="md:col-span-2 p-10">
                                {/* Summary */}
                                <section>
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Professional Summary</h2>
                                    <p className={`text-sm mt-2 leading-relaxed overflow-hidden ${summeryData ? "text-black" : "text-neutral-400"}`}>
                                        {summeryData || "Passionate Frontend Web Developer with hands-on experience in building responsive and modern web applications using React and Tailwind CSS. Strong focus on clean UI, performance, and user experience."}
                                    </p>
                                </section>

                                {/* Experience */}
                                <section className="mt-8">
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Experience</h2>
                                    <div className="text-black">
                                        <div className="flex justify-between">
                                            <h1 className={`font-semibold text-xl tracking-wide ${companyName ? "text-black" : "text-neutral-400"}`}>{companyName || 'Microsoft'}</h1>
                                            <h2 className={`font-medium text-sm ${jobTitle ? "text-black" : "text-neutral-400"}`}>{jobTitle || "Frontend Developer"}</h2>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className={`text-sm ${startEndDate ? "text-black" : "text-neutral-400"}`}>{startEndDate || "feb 24 - jan 25"}</p>
                                            <p className={`text-sm ${location ? "text-black" : "text-neutral-400"}`}>{location || 'Delhi'}</p>
                                        </div>

                                        <p className={`text-sm mt-3 ${companyDescription ? 'text-black' : 'text-neutral-400'}`}>{companyDescription || "Microsoft is a technology company that makes computer software and digital tools. It helps people and businesses work."}</p>
                                    </div>
                                </section>

                                {/* Projects */}
                                <section className="mt-8">
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Projects</h2>
                                    {projectAllData.map((project, index) => (
                                        <div key={index} className="mt-1">
                                            <div className="flex justify-between">
                                                <h2 className={`font-semibold text-xl text-black ${project.name ? 'text-black' : 'text-neutral-400'}`}>{project.name || "Music Player"}</h2>
                                                <p className={`text-black text-sm mt-1 ${project.endData ? 'text-black' : 'text-neutral-400'}`}>{project.endData || 'Jan 12 - Marh 30'}</p>
                                            </div>
                                            <p className={`text-sm mt-1 ${project.projectDes ? 'text-black' : 'text-neutral-400'}`}>
                                                {project.projectDes || 'Built a dynamic resume builder using React and Tailwind CSS with live preview and reusable templates.'}
                                            </p>
                                        </div>
                                    ))
                                    }
                                </section>

                                {/* Education */}
                                <section className="mt-8 text-black">
                                    <h2 className="text-2xl font-bold border-b pb-2 text-black">Education</h2>
                                    <h1 className={`font-medium mt-2 ${collageName ? 'text-black' : 'text-neutral-400'}`}>{collageName || "Computer Science Engineering Collage"}</h1>
                                    <h2 className={`text-sm font-medium mt-1 ${collageName ? 'text-black' : 'text-neutral-400'}`}>{degree || "Computer Science"}</h2>
                                    <div className="flex justify-between text-sm mt-1">
                                        <p className={`${collageName ? 'text-black' : 'text-neutral-400'}`}>{completeDate || "Jun 2026"}</p>
                                        <p className={`${collageName ? 'text-black' : 'text-neutral-400'}`}>{location || "Delhi"}</p>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FirstTemp
