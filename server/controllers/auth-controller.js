 const User = require("../models/user-model");
 const bcrypt = require("bcryptjs");



const home = async(req, res) =>{
    try {
        res.status(200).send('Welcome to the home');       
    } catch (error) {
        console.log(error);
    }
}

//registration

const register = async(req, res) => {

    try {
        console.log(req.body);

        const{username,email,phone,password}=req.body;

        //chek email is already exist or not

        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(400).json({message:"email already exists"});
        }
        //end

       //hash the password for security and 1st install 'npm i bcryptjs' the import bcrypts
    //    const saltRound = 10;
    //    const hash_password = await bcrypt.hash(password,saltRound);
    //end



         //inserting data
           const userCreated = await User.create({username,
             email, 
             phone, 
             password,    //: hash_password,
            });
        //end
        
             res.status(201).json({msg:"registration successfull",
                 token: await userCreated.generateToken(),
                 userId: userCreated._id.toString(),});
        
    } catch (error) {

    //    res.status(400).json("internal server error");
       next(error);
        
    }
    }
    //registrationend
    
    //login
    const login = async(req, res) => {
        try {
            const{email,password}=req.body;
             //userexist not only find email it also find alldata with email
            const userExist = await User.findOne({email});
              console.log(userExist);
              
            if(!userExist){
                return res.status(400).json({message:"Invalid Credentials"});
            }

        //   const user = await bcrypt.compare(password, userExist.password);

        const user = await userExist.comparePassword(password);      


           if(user){
            res.status(201).json({msg:"Login successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),});

           }else{
            res.status(401).json({message:"Invalid Email or password"})
           }
          

            
        } catch (error) {
            res.status(400).json("internal server error");
            
        }

    };


    //to send user data - uer logic

    const  user = async(req,res) => {

        try {
           const userData = req.user;
           console.log(userData);
        return res.status(200).json({userData});
            
        } catch (error) {
            console.log(`error from the user route${errot}`);
            
        }

    }




module.exports = { home, register,login , user};