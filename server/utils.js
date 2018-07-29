const authCheck = (req, res, next) => {
  console.log('authcheck called')
  if (!req.user) {
    console.log('user not found')
    //res.redirect('/login'); //this doesn't work well with react
    res.send({userFound:false})
  } else {
    next();
  }
};

module.exports = {
  authCheck: authCheck
};

//perhaps add encryption here