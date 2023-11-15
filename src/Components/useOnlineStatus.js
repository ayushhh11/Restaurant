import { useState, useEffect } from "react"

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState([true])
    useEffect(()=>{
        async function getStatus(){
            window.addEventListener("offline",()=>{
                setOnlineStatus(false);
            })
            window.addEventListener("online",()=>{
                setOnlineStatus(true);
            })
        }
        getStatus();
    },[])
    return onlineStatus;
}
export default useOnlineStatus;