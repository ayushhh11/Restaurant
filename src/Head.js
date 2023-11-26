import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import useOnlineStatus from './Components/useOnlineStatus'
import UserContext from './Components/utils/UserContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
const Head = ()=>{
    const [login, setlogin] = useState(['Login']);
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext)
    const storeItems = useSelector((store)=> store.cart.items)
    console.log("this is store",storeItems)
    return (
        
    <div className=' flex justify-between m-4 shadow-lg  bg-green-100'>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAwFBMVEUAAAD///96w1Z7xVaRlpi9wsQKEg5zuVYAAAimrbF9yFd7xlu5vb8qRCUoKyxqrFX2+frx8fFKSkseNCGBzlxfl0IQGgxjnkWWm55AaDbNzc1ShkYkPiaLi4tAQECcnJwQDxAADRLX3N4pRy9emEofISNpb3IrMjVydnedpKcPHCA/RUhPU1V9fX0YGxxdY2YzOz+AiIw2NjYaJSjl5eU2XDgOGhUvTipKeT9YjUEgMxgVJh0xTiMPIB4YKBY6XzIG0WarAAAEyklEQVRoge2bbXuiOBSGE0FBXkRatqOgHWRoK6NW3aEV62z9//9qzkl4dWh3ixZ29+L5ZGLkzknOeaK9GkKZ7OktqUO3U5sDCaNe1QKN0XbC/VojFfWVc+vGMjChdu1YQmzg1rm3iW4paSJcCJhMG+FOST11e6pb4jbCbdWqVatWrVq1atXq/6U7TdO2uWZf0+4JETVt9LncAfxI7eaaJqVA7FLqfTJ3SKlW5IqM+8k/5Fpu89yHeaBp4v333PDFtut53e2Ct5ar1ZwMVkH/8YJcNzD536BCMXn3QRvyrmHA2n1KzTWMGg4uxw09msrm8azDXFfMHeJMLsllkQZiEKaUW4zfE+dTG1l9zgWZZnh3Sa45Z11zxOFS4wJwa1viZBYxV5x9GPoud7iM+5YwZEjIPWVWxrQwWcD9eEYX5WYGPYLWmmiwAmkXEEO+v/lsvwTXHBQ6RyTEzR1xiTAJOmP5XA17yn1IuV62bS7sbEBMeqLNOdzHsGBNi2GJX73BXZzDJTZ8NgttRdP6/ZF23oWYyLjOf17l5J7FDYB0n59FkldZJ2byEvuGm+Jnz+Fu0B+Suhdpxg2TVfjuseSd578hLFfncrE+qMeMfjaiOS61eUYPbB78zItdCgSmHJzLnTGH7Y5G/dh+U580gw3ZsNOBJRn6B/XuZ2Sp8XQ+j8tKKZGX1W8uf+PvWuvcQDo/N15CftjJw0Zu+r3OfkgPpCCdYTedyZpw7vAMLkTS98LQFgfEXW234Mvr6RZ2dG6HZmiPHnIDN9Ou7dnBOv6YOD377+muW9b5WNbb6j8k+UQ1YXu+UZD0VBNXEgqyxm/PEHSxWfWkTkFvc28E5Z1ZVeP+k3hvOkJHuShXca4zPdfJLXlDnuyedr18B3KPWXMX7ffOeHJZ7rUjdRRF6PjXYwlEJpJh4H5ImPLAkseSwiQY1VKtnAtPFViaKR1DEQSVfLME1gG5JVg6kf34fRhRulrVuJHFn6hgxsEr5OZSXieOhVNQVBzxTgn8HdfXM8GWjhGiSHvHVxVGOuW+qhh6pE+OX3CAelON21GsVMoLeVYhRitCx5z5jKfK5PB8zfK5dzgc5J9WGmUEG2Ad32e8yc3rhTgQQ/ooX+HcQh0hVzD+Yq/3+71flSsoqYQX2RDgocn7s04J9wXXWVH9sX6oeo4gVzD+yHRzoxZSBXfwlMvyiiWeKvlRJfTv+fwK2wspm8gp48pOnHG4VJ3dhbi57YX9K+MSovuSwAoN0KpOPqzfuXAyQmUlLRlaZVwYB0ZpMH9RDPJhlfgGRigkaxeV5fO38XHM7fH5yOrh4wVcwp0gV+KGP2Z+mHH5yAgrPZ4ZFJpQkStIX1KhzTMXtPzjz6PBbYpxcf1hSfFcYH5lRQdZnuF6VF3n03NfNpTYxGLzZ1xuIThkxw0cqig26Ip5VfiewzLZSIiChevBuROLH0KIcfgAAQvJqnIS9iRLySt2jCdDsSBgxdAjS1U5l0yMDrxWWXi6oVo4woIjugIWHlDU7sC7Z/p470Q6HAgTUGxJ8jU2Jj3++uj4e+f4WonaqlWrVq1atWrVqtW/Wm5D3Kb+n7+p+wtN3ddo5H7KVYP3cZq6f9TYfaua75ddpffLKLtP59bAdNP7dL8AkOdqlJAhYqIAAAAASUVORK5CYII=' alt=''/>
        <ul className='flex items-center' >
            <li>{onlineStatus?'Online ✅':'Offline ❌'}</li>
            <li className='p-2' ><Link to =''>Home</Link></li>
            <li className='p-2'><Link to = 'contact'>Contact</Link></li>
            <li className='p-2'><Link to = '/about'>About</Link></li>
            <li className='p-2'><Link to = '/media'>Social Media</Link></li>
            <li className='p-2'><Link to = '/cart'>Cart - <b>{storeItems.length}</b></Link></li>   
            <button className='mr-8 p-2 bg-green-300 m-4 rounded-lg ' onClick={()=>{
                login[0]==='Login'? setlogin(['Logout']):setlogin(['Login'])
                }}>{login[0]}</button>
                <li className='p-2'>{loggedInUser}</li>   
        </ul>
 
    </div>
)
}
export default Head;