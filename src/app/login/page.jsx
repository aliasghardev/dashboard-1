"use client"
import { React, useState } from "react";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "admin") {
            window.localStorage.setItem('loggedIn', true);
            setTimeout(() => { window.location = "/dashboard" }, 500);
        } else {
            alert('enter admin');
        }
    };

    return (
        <div className="w-full h-screen bg-black text-white flex flex-wrap justify-center items-center ">
            <div className="w-1/3 *:w-full *:text-center bg-slate-600 p-6 rounded-2xl">
                <h1 className="text-5xl capitalize font-bold my-5">welcome</h1>
                <form onSubmit={handleSubmit} className="*:w-full *:my-3 *:text-2xl">
                    <label htmlFor="username"> username:</label>
                    <input
                        className="text-black"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">password :</label>
                    <input
                        className="text-black"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-500 p-3 ">login</button>
                </form>
            </div>
            <h1 className="w-full text-center">developed by aliasghar gholami</h1>
        </div>
    );
};

export default LoginPage;

