import React, { useState } from "react";

const FloorPlan = () => {
    const [dragging, setDragging] = useState(false);
    const [positions, setPositions] = useState([
        { id: 1, top: 100, left: 100 },
        { id: 2, top: 200, left: 200 },
        { id: 3, top: 300, left: 300 },
    ]);

    const handleMouseDown = (id, e) => {
        e.stopPropagation();
        setDragging(id);
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const updatedPositions = positions.map((position) =>
                position.id === dragging
                    ? { ...position, top: e.clientY, left: e.clientX }
                    : position
            );
            setPositions(updatedPositions);
        }
    };

    return (
        <div
            style={{ position: "relative", height: "100vh", border: "1px solid #000" }}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {positions.map((position) => (
                <div
                    key={position.id}
                    style={{
                        position: "absolute",
                        top: position.top + "px",
                        left: position.left + "px",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#f00",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onMouseDown={(e) => handleMouseDown(position.id, e)}
                >
                    {position.id}
                </div>
            ))}
        </div>
    );
};

export default FloorPlan;
