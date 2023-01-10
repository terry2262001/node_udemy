import userService from '../service/userService';



const handleUserPage =  async function(req, res, next)  {
  let  userList =   await userService.getUserList();
  await userService.deleteUser(2);
  return res.render("user.ejs",{userList});
  
};
const handleCreateNewUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  userService.createNewUser(email, password, username);


  return res.redirect('/user');
};
const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect('/user')

}
const getUpdateUser = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData ={};
    userData = user;
    // if( user &&user.length > 0) {
    //     userData = user[0];
    // }

    res.render('user-update.ejs',{userData});
};
const handleUpdateUser = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let id = req.body.id;
   await userService.updateUserInfo(email, username,id);
   return res.redirect('/user');

}

module.exports = { handleUserPage, handleCreateNewUser,handleDeleteUser,handleUpdateUser,getUpdateUser };
