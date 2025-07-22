import React from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
 const data= useLoaderData();
    return (
    <div className="bg-gray-600 text-white text-3xl p-4 flex flex-col items-center rounded-3xl gap-4">
    <h1 >Github Info</h1>
    <img src={data.avatar_url} alt="avatar" className="w-24 h-24 rounded-full" />
    <p className="hover:translate-x-3 duration-300 bg-blue-300 rounded-3xl p-2 ">Username: {data.login}</p>
    <p className="hover:translate-x-3 duration-300 bg-blue-300 rounded-3xl p-2">Followers: {data.followers}</p>
    <p className="hover:translate-x-3 duration-300 bg-blue-300 rounded-3xl p-2 ">Following: {data.following}</p>
    <p className="hover:translate-x-3 duration-300 bg-blue-300 rounded-3xl p-2">Public Repos: {data.public_repos}</p>
    </div>
    );
}
export const gitLoader= async () => {
    const reponse =await fetch("https://api.github.com/users/Vaibhav-Rawat-cipher");
    return reponse.json();
}
