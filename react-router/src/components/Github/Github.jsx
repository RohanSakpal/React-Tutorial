import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/RohanSakpal')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data?.followers}
        <img width={300} src={data?.avatar_url} alt="" />
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RohanSakpal');
    return response.json();
}