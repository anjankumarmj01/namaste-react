import {useEffect, useState} from 'react';

const User = () => {
    const [userData, setUserData] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data =  await fetch("https://api.github.com/users/anjankumarmj01");
        const json = await data.json();
        setUserData(json);
    }

    const {name, bio, avatar_url} = userData;

    return (
        <div className="user">
            <img src={avatar_url}></img>
            <h3>{name}</h3>
            <h3>{bio}</h3>
        </div>
    )
}

export default User;