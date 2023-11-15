import { useState } from "react";

const User = (popa)=>{
    const[count1, setCount1] = useState(10);
    return(
    <div className='user-card'>
        <h5>count1: {count1}</h5><br/>
        <button onClick={()=>{
            setCount1(count1+1);
        }}>Increase count</button><br/>
        <h5>{popa.name}</h5><br/>
            <h3> Ayush Tomar</h3>
            <h3>Mob: 9617241111</h3>

        </div>
    )
}
export default User;