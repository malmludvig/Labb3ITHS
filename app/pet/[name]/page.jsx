"use client"

import React from "react";

export default function ProfileView ( params) {


  var stored_datas = JSON.parse(localStorage["datas"]);

  //Använd hundnamnet i URL:en för att veta vilken hund som ska visas.
  var str = window.location.href;
  str = str.substring(str.indexOf("t") + 2); 
 
  const petName = window.location.pathname.split('/').filter(segment => segment.trim() !== '').pop();

  console.log('Pet name:', petName);
     
  console.log(str);

  let dogIdVar,
    nameVar,
    nickVar,
    ageVar,
    bioVar,
    homeVar,
    imageVar;
    
  for (var i in stored_datas) {
    if (stored_datas[i].name === petName) {
      dogIdVar = stored_datas[i].dogId;
      nameVar = stored_datas[i].name;
      nickVar = stored_datas[i].nick;
      ageVar = stored_datas[i].age;
      bioVar = stored_datas[i].bio;
      homeVar = stored_datas[i].home.toString();
      imageVar = stored_datas[i].img;
    }
  }





  return (
    <div>
      <h1>{nameVar}'s profile</h1>
      <img className="profileImg" src={imageVar} alt="" />
      <table>
        <tr></tr>
        <tr>
          <td>Id:</td>
          <td>{dogIdVar}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{nameVar}</td>
        </tr>
        <tr>
          <td>Nick:</td>
          <td>{nickVar}</td>
        </tr>
        <tr>
          <td>Age:</td>
          <td>{ageVar}</td>
        </tr>
        <tr>
          <td>Bio:</td>
          <td>{bioVar}</td>
        </tr>
        <tr>
          <td>Home:</td>
          <td>{homeVar}</td>
        </tr>
        <br />
        <tr>


        </tr>
      </table>

      <a>
        <span
          className="profileLink"
          
        >
          Edit dog
        </span>
      </a>
    </div>
  );
};