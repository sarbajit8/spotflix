//validating that users table(for register) schema(userSchema in user-model.js) and 
// signupSchema which is use for validation in user table (using zod in auth-validator.js file)
// are matching(validating each other) or not



const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      const status =422;
      const message = "fill the imput properly";

      const extraDetails = err.errors[0].message;

     const error = {
        status,
        message,
        extraDetails,
     }

      console.log(error);
      // res.status(400).json({ msg: message });

      next(error);
    }
  };

module.exports = validate;


  
