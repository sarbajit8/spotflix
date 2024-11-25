
const adminMiddleware = async (req, res, next) => {
    try {

        console.log(req.user.isAdmin);
        // res.status(200).json({msg:req.user});

        
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({msg:"Access denied .User is not an admin"});
        }
        next();
       
    } catch (error) {

        next(error);
        
    }
};

module.exports = adminMiddleware;