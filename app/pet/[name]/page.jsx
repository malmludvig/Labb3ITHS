"use client"

import React, { useEffect, useState } from "react";

export default function ProfileView(params) {
  const [petData, setPetData] = useState(null);

  useEffect(() => {
    const petName = window.location.pathname.split('/').filter(segment => segment.trim() !== '').pop();
    console.log('Pet name from URL:', petName);
    
    const storedDataString = localStorage.getItem("datas");
    if (!storedDataString) {
      console.error("No data found in localStorage.");
      return;
    }

    let storedDatas;
    try {
      storedDatas = JSON.parse(storedDataString);
      console.log('Parsed data from localStorage:', storedDatas);
    } catch (error) {
      console.error("Failed to parse data from localStorage:", error);
      return;
    }

    let petInfo = null;
    for (let i in storedDatas) {
      if (storedDatas[i].name.toLowerCase() === petName.toLowerCase()) {
        petInfo = {
          dogId: storedDatas[i].dogId,
          name: storedDatas[i].name,
          nick: storedDatas[i].nick,
          age: storedDatas[i].age,
          bio: storedDatas[i].bio,
          home: storedDatas[i].home.toString(),
          img: storedDatas[i].img
        };
        console.log('Pet info found:', petInfo);
        break;
      }
    }

    if (!petInfo) {
      console.error("No matching pet info found.");
    }

    setPetData(petInfo);
  }, []);

  if (!petData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{petData.name}'s profile</h1>
      <img className="profileImg" src={petData.img} alt="" />
      <table>
        <tbody>
          <tr>
            <td>Id:</td>
            <td>{petData.dogId}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{petData.name}</td>
          </tr>
          <tr>
            <td>Nick:</td>
            <td>{petData.nick}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{petData.age}</td>
          </tr>
          <tr>
            <td>Bio:</td>
            <td>{petData.bio}</td>
          </tr>
          <tr>
            <td>Home:</td>
            <td>{petData.home}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}