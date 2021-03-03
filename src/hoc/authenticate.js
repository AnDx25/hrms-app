import Login from "../screens/login/Login"

const authenticate=(component)=>{
    const accessToken=localStorage.getItem("accessToken")
    const isLoggedIn=accessToken?true:false
    if(isLoggedIn)
    {
        return component
    }
    else
    {   
        return ()=>{
            window.location.replace("/login")
            
        }
    }

}
export default authenticate;