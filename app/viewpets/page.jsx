"use client"

import React, {useState} from 'react'
import Link from "next/link"

export default function HomeView () {

    //Om det är första gången besökaren använder dogbook så skapar jag en tom array som sparas i localStorage.
    if (localStorage.getItem('datas') === null) 
    {
        let emptyArray = []
        localStorage["datas"] = JSON.stringify(emptyArray);
    } 

    var stored_datas = JSON.parse(localStorage["datas"]);

    const deleteDog = (id) => {

        for (let i = 0; i < stored_datas.length; i++) {
        
            const temp1 = stored_datas[i].friendList
            const temp2 = temp1.filter(x => x !== id);

            stored_datas[i].friendList = temp2
          }

        const removeIndex = stored_datas.findIndex( item => item.dogId === id );
        stored_datas.splice(removeIndex, 1);

        localStorage["datas"] = JSON.stringify(stored_datas);
        window.location.reload();

    }

    return (
        <div>
            
        <h1>Dogs:</h1>
            
            {stored_datas.map((item, index) => (
                <div key={index}>
                    {/* <Link href={"/pet/" + item.name.toLowerCase()}>{item.name}</Link>*/}

                    <a onClick={() => history.push(`/profile/${item.name}`)} className="profileLink">{item.name}</a>
                    <a onClick={() => deleteDog(item.dogId, item.name)} className="profileLink"> [delete]</a>
                    <img className="profileImg" src={item.img} alt="" />
                    <br/>
                </div>
                ))}
                <br/>
                <a></a><span onClick={()=> history.push('/createview')}>Create new dog</span>
        </div>
    )
}