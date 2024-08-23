import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./constants";

const useRestaurantMenu = () => {
    const { resId } = useParams();
    const [resData, setResData] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResData(json);
    }

    return resData;
}

export default useRestaurantMenu;