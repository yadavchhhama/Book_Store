const router = require("express").Router();

router.post("/sign-up",async (req,res) => {
    try{
        const {username,email,password,addres} = req.body;

        if(username.length < 4) {
            return res
            .status(400)
            .json({message: "Username length should be greater than 3"});
        }
        const existingUsername = await User.find({email:email});
        if(existingUsername){
            return res
            .status(400)
            .json({message: "Username already exist"});
        }

        const existingEmail = await UserActivation.find({username:username});
        if(existingEmail){
            return res
            .status(400)
            .json({message: "Email already exist"});
        }

        if(password.length <= 5) {
            return res
            .status(400)
            .json({message: "Password length should be greater than 5"});
        }

        const newUser= new User({
            username:username,
            email:email,
            password:password,
            address : address,
        });
        await newUser.save();
        return res.status(200).json({message : "Sign up successfully"})
    }catch(error) {
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;