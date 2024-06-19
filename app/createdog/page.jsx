"use client"

import React, { useState, useEffect } from 'react'

export default function CreateDog() {
    const [storedDatas, setStoredDatas] = useState([]);
    const [name, setName] = useState("");
    const [nick, setNick] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [url, setUrl] = useState("");


    useEffect(() => {
        // Om det är första gången besökaren använder dogbook så skapar jag en tom array som sparas i localStorage.
        if (localStorage.getItem('datas') === null) {
            let emptyArray = [];
            localStorage.setItem("datas", JSON.stringify(emptyArray));
        }

        var storedDatas = JSON.parse(localStorage.getItem("datas"));
        setStoredDatas(storedDatas);

        if (!url) {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then((res) => res.json())
                .then((data) => {
                    setUrl(data.message);
                })
                .catch(console.log);
        }
    }, [url]);

    let uniqueId = 0;
    for (var i in storedDatas) {
        if (storedDatas[i].dogId > uniqueId)
            uniqueId = storedDatas[i].dogId + 1;
    }

    const newObject = {
        "home": false,
        "friendList": []
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        newObject.dogId = uniqueId;
        newObject.name = name;
        newObject.nick = nick;
        newObject.age = age;
        newObject.bio = bio;
        newObject.img = url;

        const updatedDatas = [...storedDatas, newObject];
        localStorage.setItem("datas", JSON.stringify(updatedDatas));
        setStoredDatas(updatedDatas);
        window.location.href = '/';

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <th>Create new dog</th>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>
                            <label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Nick:</td>
                        <td>
                            <label>
                                <input
                                    type="text"
                                    value={nick}
                                    onChange={e => setNick(e.target.value)}
                                />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>
                            <label>
                                <input
                                    type="text"
                                    value={age}
                                    onChange={e => setAge(e.target.value)}
                                />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Bio:</td>
                        <td>
                            <label>
                                <input
                                    type="text"
                                    value={bio}
                                    onChange={e => setBio(e.target.value)}
                                />
                            </label>
                        </td>
                    </tr>
                </table>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}