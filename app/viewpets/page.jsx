"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"

export default function HomeView() {
    const [storedDatas, setStoredDatas] = useState([]);

    useEffect(() => {
        // Om det är första gången besökaren använder dogbook så skapar jag en tom array som sparas i localStorage.
        if (localStorage.getItem('datas') === null) {
            let emptyArray = []
            localStorage.setItem("datas", JSON.stringify(emptyArray));
        }

        var storedDatas = JSON.parse(localStorage.getItem("datas"));
        setStoredDatas(storedDatas);
    }, []);

    const deleteDog = (id) => {
        const updatedDatas = storedDatas.map(item => {
            const updatedFriendList = item.friendList.filter(x => x !== id);
            return { ...item, friendList: updatedFriendList };
        }).filter(item => item.dogId !== id);

        localStorage.setItem("datas", JSON.stringify(updatedDatas));
        setStoredDatas(updatedDatas);
    }

    return (
        <div>
            <h1>Dogs:</h1>
            {storedDatas.map((item, index) => (
                <div key={index}>
                    <Link href={"/pet/" + item.name.toLowerCase()}>{item.name}</Link>
                    <a onClick={() => deleteDog(item.dogId)} className="deleteLink"> [delete]</a>
                    <img className="profileImg" src={item.img} alt="" />
                    <br />
                </div>
            ))}
            <br />
        </div>
    )
}
