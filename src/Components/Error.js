import { useRouteError } from "react-router-dom"
const Error = ()=>{
    
    const err = useRouteError();
    console.log('error this is'+err+"  "+useRouteError());
    return (
        <div>
        <h2>This is an error Opps!!</h2> 

        <h3>{err.status}: </h3>
        </div>     
    )
}
export default Error