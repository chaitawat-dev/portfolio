import React from "react";
import "../../styles/global.css";
import "../../styles/animation.css";
import Navbar from "./Navbar";

export default function layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">{children}</div>
        </div>
    );
}
