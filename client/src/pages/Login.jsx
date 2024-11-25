import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";


export const Login = () => {


  
  const[user,setUser] = useState({

    email: "",

    password: "",
  });

//navigae
const navigate =useNavigate();

//useAuth for JWT token
const { storeTokenInLS } = useAuth();


//handeling the input value

const handleInput= (e) => {
   let name = e.target.name;
   let value = e.target.value;

   setUser({
    ...user,
    [name] : value,
   })
};

//handel form submission
const handleSubmit = async (e) => {
   e.preventDefault();
  //  alert(user);
   try {

    const response = await fetch("http://localhost:5000/api/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
  
     });
     console.log("response data : ", response);
     
     const res_data = await response.json();

     if(response.ok){
      toast.success("Login successful");

     
      //store the token in local host
      storeTokenInLS(res_data.token);


      setUser(
  {  

    email: "",
    password: "",
  });
  navigate("/");
     }else{
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      console.log("invalid credential");
      
     }
    
   } catch (error) {
    console.log("login", error);
    
   }

   
};

  return (
    <section>
    <main>
      <div className="section-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src="/images/login.png" 
            alt="let's fill the login form" 
            width="500"
            height="500"
            />
          </div>
          <div className="registration-form">
            <h1 className="main-heading">login Now</h1>
            <br />
            <form onSubmit={handleSubmit}>
          
              <div>
                <label htmlFor="email">email</label>
                <input type="email" name="email" 
                placeholder="enter your email" id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
                />
              </div>
            
              <div>
                <label htmlFor="password">password</label>
                <input type="password" name="password" 
                placeholder="password" id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
                />
              </div>

              <br/>

              <button type="submit" className="btn btn-submit">Login Now</button>

              
            </form>
          </div>

        </div>
      </div>
    </main>
   </section>
  )
}
