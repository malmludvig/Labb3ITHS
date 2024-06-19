"use client"

import React from "react";

export default function ProfileView () {

  const history = useHistory();

  var stored_datas = JSON.parse(localStorage["datas"]);

  //Använd hundnamnet i URL:en för att veta vilken hund som ska visas.
  var str = window.location.href;
  str = str.substring(str.indexOf("e") + 2);

  const petName = window.location.pathname.split('/').filter(segment => segment.trim() !== '').pop();

  console.log('Pet name:', petName);
  
  console.log(str);

  let dogIdVar,
    nameVar,
    nickVar,
    ageVar,
    bioVar,
    homeVar,
    friendListVar,
    imageVar;
    
  for (var i in stored_datas) {
    if (stored_datas[i].name === str) {
      dogIdVar = stored_datas[i].dogId;
      nameVar = stored_datas[i].name;
      nickVar = stored_datas[i].nick;
      ageVar = stored_datas[i].age;
      bioVar = stored_datas[i].bio;
      homeVar = stored_datas[i].home.toString();
      friendListVar = stored_datas[i].friendList;
      imageVar = stored_datas[i].img;
    }
  }

  //Skapar en array med alla nuvarande hunds vänner
  let friendIds = friendListVar.map((item, index) =>
    stored_datas.find((x) => x.dogId === item)
  );

  //Skapar en array med enbart vännernas ID:n.
  const friendNames = friendIds.map((item) => {
    return item.name;
  });

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
          <td>Friend list:</td>
          <td>
            {friendNames.map((item, index) => (
              <div key={index}>
                {item}
                <br />
              </div>
            ))}
          </td>
        </tr>
      </table>

      <a>
        <span
          className="profileLink"
          onClick={() => history.push(`/editview/${nameVar}`)}
        >
          Edit dog
        </span>
      </a>
    </div>
  );
};