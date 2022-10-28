let {UserTable} = require('../../models/User');
let userRepo = new UserTable({})
    .initalize();

function signUp(req,res){
    console.log(`* Receive called from ${req.originalUrl} and ${JSON.stringify(req.body,null,2)}.`);
    let userData = userRepo.create(req.body);
    console.log(userData);
    let serverRes = userData.getTop();
    return res.json({
        serverRes
    })
}

module.exports = signUp;