
const boom = require('@hapi/boom');

const { encrypt, compare } = require("../utils/encript");
const { messageLogin } = require("../utils/emailprefabs/authemail");
const { tokenSign } = require("../utils/token");



const User = require("../models/user");

const loginCtrl = async (req, res, next) => {
  try {
    const body = req.body;
    var user = await User.findOne({ email: body.email });
    if (!user) {
      next(boom.notFound("User Not Found"))

    }
    const checkPassword = await compare(body.password, user.password);

    if (!checkPassword) {
      next(boom.unauthorized("Incorret Password"));
    }else{

    let session = {
      id: user.id,  
      name: user.name,
      rol: user.rol
    }
  
    res.status(200).json(session)
  }
  } catch (e) {
    next(boom.badRequest(e));
  }
};

const message = async (req, res, next) => {
  try {
    const { id } = req.params;

    var user = await User.findById(id);
    var ipguard = req.header('x-forwarded-for') || req.connection.remoteAddress;
    
    if (user.verified.state === 0 && user.verified.code === req.body.code) {
      console.log("No ip")
      if (!user.ips.find(x => x === ipguard)) {
        console.log("No ip")
        user.ips.push(ipguard)
      }

      user.verified.state = 1
      user = await User.findByIdAndUpdate(user._id, user)
      const tokenJwt = await tokenSign(user);

      const data = {
        token: tokenJwt,
        shopid:user.shop.id
      };


      res.json(data);
    } else {
      next(boom.clientTimeout("Bad Time"))
    }
  }catch(e){
    console.log(e)
  }
    

  };




module.exports = { loginCtrl, message };