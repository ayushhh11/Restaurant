import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
import { Social } from './Components/Social'
import Error from './Components/Error'
import ReactDOM from 'react-dom/client'
import { MainPageComponent } from './Components/MainPageComponent'
// import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import Restaurants from './Components/Restaurants'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import userContext  from './Components/utils/UserContext'
import Head from './Head'
import Shimmer from './Components/Shimmer'
import { Provider } from 'react-redux'
import appStore from './redux/appStore'
const Li = async()=>{
    const a = await import('./Components/About')
    return ({default: a.About})
}
const About = lazy(Li)
// const About = lazy(()=>import('./Components/About').then(module => ({default: module.About})))

const Socialupdate = Social(Contact)
const App = ()=>{
    const [naam, setNaam] = useState()
    // Hooks can only be called inside the component
    useEffect(()=>setNaam('Gray Matter')
    ,[])
    
    return (
        <Provider store={appStore}>
        <userContext.Provider value = {{loggedInUser: naam, setNaam}}>
    <div>
    <Head/>
    <Outlet/>
    
    </div> 
    </userContext.Provider>
    </Provider>
)
      }

      const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <MainPageComponent />,
                },
                {
                    path: '/about',
                    element: <Suspense fallback={<Shimmer/>}><About/></Suspense>,
                },
                {
                    path: '/contact',
                    element: <Contact />,
                },
                {
                    path: '/:id',
                    element: <Restaurants />,
                },
                {
                    path: '/media',
                    element: <Socialupdate />,
                },
                {
                    path: '/cart',
                    element: <Cart />,
                }
            ],
            errorElement: <Error/>,
        }
        
        ])
root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {routes}/>)


export default Head