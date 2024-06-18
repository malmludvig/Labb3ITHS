"use client"

import React, {useState} from 'react'

export const HomeView = () => {
    const router = useRouter();
    const [storedDatas, setStoredDatas] = useState([]);

    useEffect(() => {
        // Check if localStorage is available (client-side)
        if (typeof window !== 'undefined') {
            // Om det är första gången besökaren använder dogbook så skapar jag en tom array som sparas i localStorage.
            if (localStorage.getItem('datas') === null) {
                let emptyArray = [];
                localStorage.setItem('datas', JSON.stringify(emptyArray));
            }

            setStoredDatas(JSON.parse(localStorage.getItem('datas')));
        }
    }, []);

    const deleteDog = (id) => {
        // Ensure we only modify storedDatas in the client-side
        if (typeof window !== 'undefined') {
            let updatedDatas = [...storedDatas];

            // Update friend lists
            updatedDatas.forEach(data => {
                data.friendList = data.friendList.filter(friendId => friendId !== id);
            });

            // Remove the dog with the given id
            updatedDatas = updatedDatas.filter(data => data.dogId !== id);

            // Update localStorage and state
            localStorage.setItem('datas', JSON.stringify(updatedDatas));
            setStoredDatas(updatedDatas);

            // Reload the page (if necessary)
            // window.location.reload(); // You might not need this line anymore
        }
    };

    return (
        <div>
            <h1>Dogs:</h1>

            {storedDatas.map((item, index) => (
                <div key={index}>
                    <a onClick={() => router.push(`/profile/${item.name}`)} className="profileLink">@{item.name}</a>
                    <a onClick={() => deleteDog(item.dogId)} className="profileLink">[x]</a>
                    <br/>
                </div>
            ))}
            <br/>
            <span onClick={() => router.push('/createview')}>Create new dog</span>
        </div>
    );
};