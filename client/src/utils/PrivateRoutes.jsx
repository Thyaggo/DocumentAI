import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from '../Context'

const PrivateRoutes = () => {
    let { token } = useContext(MyContext)
    return(
        token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes