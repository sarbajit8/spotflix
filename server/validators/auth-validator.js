//importing zod [ befor we install "npm i zod"]
const z = require("zod");

// const signupSchema = z.object({
//   username: z.string().min(5,{message: "Name must be at lest of 3 chars."}),
//   email: z.string().email({message: "Invalid email address"}),
//   phone: z.string().min(10,{massage: "phone must be at lest of 10 chars."}),
//   password: z.string().min(6,{massage: "Email must be at lest of 6 chars."})
//   });
//creating an object schema
 const signupSchema = z.object({
   
   username: z.string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "Name must be at lest of 3 chars."})
    .max(255,{message: "Name must not be more than 255 charecters"}),

    email: z.string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{message: "Email must be at lest of 3 chars."})
    .max(255,{message: "Email must not be more than 255 charecters"}),

    phone: z.string({required_error: "Phone Number is required"})
    .trim()
    .min(10,{message: "Phone Number must be at lest of 10 chars."})
    .max(20,{message: "Name must not be more than 20 charecters"}),
 
    password: z.string({required_error: "Password is required"})
    .min(7,{message: "Password must be at lest of 7 chars."})
    .max(1024,{message: "Password must not be more than 11024 charecters"}),

 });


 const loginSchema = z.object({
   
   email: z.string({required_error: "Email is required"})
   .trim()
   .email({message: "Invalid email address"})
   .min(3,{message: "Email must be at lest of 3 chars."})
   .max(255,{message: "Email must not be more than 255 charecters"}),

   password: z.string({required_error: "Password is required"})
   .min(7,{message: "Password must be at lest of 7 chars."})
   .max(1024,{message: "Password must not be more than 11024 charecters"}),

});

 module.exports = {signupSchema,loginSchema};
