import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext();


//jwt
export const AuthProvider = ({children}) => {

  //set token to useState for using in logout
  const [token, setToken] = useState ( localStorage.getItem("token"));
  const [user, setUser] = useState (""); 
  const [services, setServices] = useState ("");
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token",serverToken);
      
  };

//if token is true then isLoggedIn is also true
  let isLoggedIn = !!token;

  //logout
  const LogoutUser = () => {
     setToken("");
     return localStorage.removeItem("token");

  }

  // jwt AUTHENTICATION- to get the currentcly logdin user data


  const userAuthentication = async () =>{
    try {

      const response = await fetch("http://localhost:5000/api/auth/user",{
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if(response.ok){
        const data = await response.json();
        console.log("user data",data.userData);
        
        setUser(data.userData);
      }
      
    } catch (error) {
      console.log("Error fatching using data");

    }

  };

  //to fetch the services deta 
  const getServices = async () =>{
    try {
      const response = await fetch("http://localhost:5000/api/data/service",{
          method:"GET",
         });
      if(response.ok){
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);  
      }
  
    } catch (error) {
      console.log(`services frontend error: ${error}`); 
    }
  };



 useEffect(() => {
  getServices();
  userAuthentication();
}, []);
  


    return(
     <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser, user, services, authorizationToken}}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () =>{
    const authContextValu = useContext(AuthContext);
    if(!authContextValu){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValu;
}