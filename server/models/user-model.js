const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//userschema
const userSchema = new mongoose.Schema({

    username: {
        
        type:String,
        require: true,
    },
    email: {
        type:String,
        require: true,
    },
    phone: {
        type:String,
        require: true,
    },
    password: {
        type:String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

 //hash the password for security and 1st install 'npm i bcryptjs' the import bcrypts

userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password")){
        next();
    }

    try {

        const saltRound = await bcrypt.genSalt(10);
       const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//compair the password in login time
userSchema.methods.comparePassword = async function (password) {

    return bcrypt.compare(password, this.password);
};


//json wave token(jwt) for authentication[ install npm i jsonwebtoken]

userSchema.methods.generateToken = async function () {

    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
           expiresIn: "30d", 
        }
    )

    } catch (error) {
        console.log(error);
        
        
    }
}


//user model
const User = new mongoose.model("User",userSchema);


module.exports= User;