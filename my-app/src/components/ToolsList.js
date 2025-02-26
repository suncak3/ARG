import React, { useState } from "react";
import "../style/toolsList.css"; // Подключаем стили

const tools = [
    { id: 1, name: "Filters", image: "/images/tools/filter.png", link: "/filters" },
    { id: 2, name: "Ball Bearings", image: "/images/tools/ball_bearing.png", link: "/ball-bearings" },
    { id: 3, name: "ROEBUCK 9PC HEX KEY BALL", image: "/images/tools/hex_key.png", link: "/hex-keys" }
];


const ToolsList = () => {
    const [selectedTool, setSelectedTool] = useState(null);

    return (
        <div className="tools-block">
            <div className="tools-container">
                {tools.map((tool) => (
                    <a key={tool.id} href={tool.link} className="tool-card-link">
                        <div
                            className={`tool-card ${selectedTool === tool.id ? "selected" : ""}`}
                            onClick={() => setSelectedTool(tool.id)}
                        >
                            <p className="tool-name">{tool.name}</p>
                            <img src={tool.image} alt={tool.name} className="tool-image"/>
                        </div>
                    </a>
                ))}
            </div>
        </div>

    );
};

export default ToolsList;
