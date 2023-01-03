import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
    // console.log("%c Hi! ", "background: #222; color: #bada55");
    // const emoji = ["💩", "👯‍", "😸", "🏄", "🚀", "🔥", "🎉", "😄", "🦁"];
    // function randomEmoji() {
    //     let random = Math.floor(Math.random() * emoji.length);
    //     return emoji[random];
    // }
    // console.log("hello %s!", randomEmoji());

    const style = [
        "background: #000",
        "color: #35ffff",
        "padding: 10px 20px",
        "line-height: 500px",
        "text-shadow: 0px 0px 10px #35ffff",
    ].join(";");

    console.log("%c ..... Coded with ♥️ by Chaitawat ......", style);

    const firstName = "Chaitawat".split("");
    const lastName = "Hongboon".split("");
    return (
        <div className="home">
            <div className="flex h-96">
                <div className="flex h-full flex-col space-y-4">
                    <h3 className="font-thin ">Hi, my name is</h3>
                    <div className=" leading-normal">
                        <div className="firstName B mr-8">
                            {firstName.map((char) => (
                                <span key={uuidv4()} className="btn">
                                    {char}
                                </span>
                            ))}
                        </div>
                        <div className="lastName B ">
                            {lastName.map((char) => (
                                <span key={uuidv4()} className="btn">
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h2 className="desc">I am a front-end developer.</h2>
                    <h5 className="max-w-lg text-lg font-thin ">
                        I enjoy developing solid front-end solutions with great
                        user experiences that are scalable. Over 4 years of
                        programming experience in HTML, CSS, JS, React.JS and
                        Next.JS
                    </h5>
                    <button className="btn-resume text-xl">Resume</button>
                </div>
                <div className="h-full">PIC</div>
            </div>

            <span className="vector1" />
            <span className="vector2" />
            <span className="vector3" />
            <span className="vector4" />
        </div>
    );
}
