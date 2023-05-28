import React from 'react';

function York() {
    const leftPrep = [["Hood"], ["Corrosive"], ["Flammable"], ["Canvas"], ["BS1", "BS2", "BS3", "BS4", "BS5", "BS6"], ["FS1", "FS2", "FS3"]]
    const rightPrep = [["Fridge"], ["PC4", "PD1", "PD2", "PC1"], ["PC5", "PD3", "PD4", "PC2"], ["PD8", "PD7", "PD6", "PD5", "PC3"], ["BS7", "BS8", "BS9", "BS10", "BS11", "BS12"], ["BS13", "BS14", "BS15", "BS16", "BS17", "BS18"]]
    const upperPhysics = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"]
    const lowerPhysics = [["C9"], ["D1", "D2", "C10"], ["D3", "D4", "C11"], ["D5", "D6", "C12"], ["D7", "D8", "D9", "D10", "D11"], ["D12", "D13", "C13"], ["D14", "D15", "C14"], ["C15"], ["D16", "C16"], ["D17", "C17"]]

    return (
        <div className="relative min-h-screen bg-green-200">
            <div
                className="absolute top-0 left-0 w-3/5 h-3/5 bg-red-200"
                style={{ height: "60vh", width: "60vw" }}
            >
                <p>Search Bar Space</p>
            </div>
            <div
                className="absolute top-0 left w-2/5 h-3/5 bg-blue-200"
                style={{ height: "60vh", width: "40vw", left: "60vw"}}
            >
                <div className={"grid grid-cols-2 gap-32 m-4 h-full"}>
                    <div id={"leftPrep"} className={"grid grid-cols-1 gap-1 h-[90%]"}>
                        {leftPrep.map(item =>
                        (item.length === 1) ? <div key={item} className={"bg-blue-400 rounded px-6 flex justify-center items-center"}>{item}</div>
                        : (item.length === 6) ?
                                <div className={"grid grid-cols-6 text-2xs gap-3"}>
                                    {item.map(element => <div key={element} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform -rotate-90"}>{element}</p></div>)}
                                </div>
                        : (item.length === 3) ?
                                <div>
                                    <div className={"grid grid-cols-3 text-2xs gap-3 h-full"}>
                                        {item.map(element => <div key={element} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform -rotate-90"}>{element}</p></div>)}
                                    </div>
                                </div> : <div></div> )}

                    </div>
                    <div id={"rightPrep"} className={"grid grid-cols-1 gap-1 h-[90%]"}>
                        {rightPrep.map(item =>
                            (item.length === 1) ? <div key={item} className={"bg-blue-400 rounded px-6 flex justify-center items-center"}>{item}</div>
                                : (item.length === 6) ?
                                    <div className={"grid grid-cols-6 text-2xs gap-3"}>
                                        {item.reverse().map(element => <div key={element} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{element}</p></div>)}
                                    </div>
                                : (item.length === 4) ?
                                    <div>
                                        <div className={"grid grid-cols-4 text-2xs gap-3 h-full"}>
                                            <div key={item[0]} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[0]}</p></div>
                                            <div className={"grid grid-rows-2 gap-1"}>
                                                <div key={item[1]} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[1]}</p></div>
                                                <div key={item[2]} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[2]}</p></div>
                                            </div>
                                            <div key={item[3]} className={"col-start-4 bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[3]}</p></div>
                                        </div>
                                    </div>
                                    :
                                    <div className={"grid grid-cols-6 text-2xs gap-3 h-full"}>
                                        <div key={item[0]} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[0]}</p></div>
                                        <div key={item[1]} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[1]}</p></div>
                                        <div key={item[2]} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[2]}</p></div>
                                        <div key={item[3]} className={"bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[3]}</p></div>
                                        <div key={item[3]} className={"col-span-2 bg-blue-400 rounded flex justify-center items-center"}><p className={"transform rotate-90"}>{item[3]}</p></div>
                                    </div> )}

                    </div>
                </div>
            </div>
            <div
                className="absolute bg-violet-200"
                style={{ height: "40vh", width: "60vw", top: "60vh", }}
            >
                <div className={"grid grid-rows-2 gap-8 m-4 h-[90%]"}>
                    <div className={"grid grid-cols-10 gap-1"}>
                        {upperPhysics.map(item => <div key={item} className={"bg-violet-400 rounded px-6 border-amber-200 hover:border-2 hover:shadow-2xl hover:shadow-amber-300 hover:text-white flex justify-center items-center"}>{item}</div>)}
                    </div>

                    <div className={"grid grid-cols-10 gap-1"}>
                        {lowerPhysics.map(item =>
                            (item.length === 1) ? <div key={item} className={"bg-violet-400 rounded px-6 flex justify-center items-center"}>{item}</div>
                        : (item.length === 3) ?
                            <div className={"grid grid-rows-4 gap-1"}>
                                <div className={"grid grid-cols-2 gap-1"}>
                                    <div key={item[0]} className={"bg-violet-400 rounded px-2 flex justify-center items-center"}>{item[0]}</div>
                                    <div key={item[1]} className={"bg-violet-400 rounded px-2 flex justify-center items-center"}>{item[1]}</div>
                                </div>
                                <div key={item[2]} className={"bg-violet-400 row-span-3 rounded px-6 flex justify-center items-center"}>{item[2]}</div>
                            </div>
                        : (item.length === 2) ?
                            <div className={"grid grid-cols-2 gap-1"}>
                                <div key={item[0]} className={"bg-violet-400 col-span-2 rounded py-2 px-2 flex justify-center items-center"}>{item[0]}</div>
                                <div key={item[1]} className={"bg-violet-400 col-span-2 rounded py-2 px-2 flex justify-center items-center"}>{item[1]}</div>
                            </div>
                        :
                        <div>
                            <div className={"grid grid-cols-2 gap-1 h-full"}>
                                <div key={item[0]} className={"bg-violet-400 rounded px-2 flex justify-center items-center"}>{item[0]}</div>
                                <div key={item[1]} className={"bg-violet-400 rounded px-2 flex justify-center items-center"}>{item[1]}</div>
                                <div key={item[2]} className={"bg-violet-400 col-span-2 rounded px-2 flex justify-center items-center"}>{item[2]}</div>
                                <div key={item[3]} className={"bg-violet-400 col-span-2 rounded px-2 flex justify-center items-center"}>{item[3]}</div>
                                <div key={item[4]} className={"bg-violet-400 col-span-2 rounded px-2 flex justify-center items-center"}>{item[4]}</div>
                            </div>
                        </div>)}
                    </div>

                </div>
            </div>
            <div
                className="absolute bg-amber-200"
                style={{ height: "40vh", width: "40vw", top: "60vh", left: "60vw"}}
            >
                <p>Order Interface</p>
            </div>
        </div>

    );
}

export default York;