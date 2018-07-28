const authCheck = (req, res, next) => {
  console.log('authcheck called')
  if (!req.user) {
    console.log('user not found')
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = {
  authCheck,
}

//perhaps add encryption here