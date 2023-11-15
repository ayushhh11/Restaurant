import User from "./User"
import UserClass from "./UserClass"
import React, { useEffect, useState } from "react"
// class AboutClass extends React.Component {
//     cnstructor(props){
//         super(proops);
//         this.state = {
//             countp:100
//         }
//     }
//     componentDidMount(){
//         // const getApi = async()=> await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         // const getApiJson = await getApi.json();
//         console.log('Parent did mount');
//     }
//     render(){
        
//         return(
//             <div>
    
//             <h1>About US Page</h1>
//             <div >
//                 {/* <User name="hello prop"/> */}
//                 <UserClass name="classss Compo"/>
//             </div>
//             </div>
//         )
//     }
// }
// export default AboutClass;
export const About = ()=>{
    const [getA, setGetA] = useState({id:999,title:"coming"});

    useEffect(()=>{
        async function getTodo(){
            console.log("use efect of about");
            const getApi = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const getApiJson = await getApi.json();
            setGetA(getApiJson);// now we are setting state variable, so re-render occur
    }
    getTodo();
    },[])
 
    const {  id,title } = getA
    
    return (
    <div>
    
    <h1>About US Page</h1>
    <div >
        {/* <User name="hello prop"/> */}
        <h4>title: {title}</h4>
        <h4>id: {id}</h4>
        
        <UserClass name="classss Compo"/>
    </div>
    </div>
    )
}
// export default About;
export const A= 4;


// Parent- Constructor
// Parent- render
//     Child1- constructor
//     Child1- render

//     Child2- constructor
//     Child2- render

//     Now react will batch up both the childs and UPDATE THE DOM 

//     Child1- componentDidMount
//     Child2- componentDidMount

// Parent- componentDidMount

//DOM manipulation is costiliest, react club children Components together
//=======Class BasedComponent/ ReactLifeCycle[not to be compared with functional component]
// ---MOUNTING---
// constructor
// render
// updates DOM
// componentDidMount
// ---UPDATING---
// state variable will be updated
// re-render
// DOM updates
// componentDidUpdate
// ---UNMOUNTING---
// componentWillMount (WHen we moved to other page)