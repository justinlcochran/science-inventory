import React from 'react';

function York() {

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
                <p className={""}>Prep Map</p>
            </div>
            <div
                className="absolute bg-violet-200"
                style={{ height: "40vh", width: "60vw", top: "60vh", }}
            >
                <div className={"grid grid-rows-2 gap-8 mt-16"}>
                    <div className={"grid grid-cols-10 gap-1"}>
                        {upperPhysics.map(item => <div key={item} className={"bg-violet-400 rounded pt-10 px-6 border-amber-200 hover:border-2 hover:shadow-2xl hover:shadow-amber-300 hover:text-white"}>{item}</div>)}
                    </div>

                    <div className={"grid grid-cols-10 gap-1"}>
                        {lowerPhysics.map(item =>
                            (item.length === 1) ? <div key={item} className={"bg-violet-400 rounded pt-10 px-6"}>{item}</div>
                        : (item.length === 3) ?
                            <div className={"grid grid-cols-2 gap-1"}>
                                <div key={item[0]} className={"bg-violet-400 rounded py-2 px-2"}>{item[0]}</div>
                                <div key={item[1]} className={"bg-violet-400 rounded py-2 px-2"}>{item[1]}</div>
                                <div key={item[2]} className={"bg-violet-400 col-span-2 rounded px-6"}>{item[2]}</div>
                            </div>
                        : (item.length === 2) ?
                            <div className={"grid grid-cols-2 gap-1"}>
                                <div key={item[0]} className={"bg-violet-400 col-span-2 rounded py-2 px-2"}>{item[0]}</div>
                                <div key={item[1]} className={"bg-violet-400 col-span-2 rounded py-2 px-2"}>{item[1]}</div>
                            </div>
                        :
                        <div>
                            <div className={"grid grid-cols-2 gap-1"}>
                                <div key={item[0]} className={"bg-violet-400 rounded px-2"}>{item[0]}</div>
                                <div key={item[1]} className={"bg-violet-400 rounded px-2"}>{item[1]}</div>
                                <div key={item[2]} className={"bg-violet-400 col-span-2 rounded px-2"}>{item[2]}</div>
                                <div key={item[3]} className={"bg-violet-400 col-span-2 rounded px-2"}>{item[3]}</div>
                                <div key={item[4]} className={"bg-violet-400 col-span-2 rounded px-2"}>{item[4]}</div>
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