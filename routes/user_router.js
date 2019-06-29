var info = function(req,res,next){
    console.log('info')
    res.send("user info")
}

var login = function(req,res,next){
    console.log('login')
    res.send("user login")
}

module.exports.info = info;
module.exports.login = login;