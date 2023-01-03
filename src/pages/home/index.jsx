import React from "react";

export default function Home() {
    const firstName = "Chaitawat".split("");
    const lastName = "Hongboon".split("");
    return (
        <div className="home">
            <div className="flex h-96">
                <div className="flex h-full flex-col space-y-4">
                    <h3 className="font-thin ">Hi, my name is</h3>
                    <div className=" leading-normal">
                        <div className="fullname B mr-8">
                            {firstName.map((char) => (
                                <span className="btn">{char}</span>
                            ))}
                        </div>
                        <div className="fullname B ">
                            {lastName.map((char) => (
                                <span className="btn">{char}</span>
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
