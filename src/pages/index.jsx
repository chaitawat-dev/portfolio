import { Link } from "gatsby";
import * as React from "react";

export default function Home() {
    console.log("%c Hi! ", "background: #222; color: #bada55");
    return (
        <div>
            <Link to="/home">Go to Home</Link>
        </div>
    );
}
