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

module.exports = { handleUserPage, handleCreateNewUser,handleDeleteUser };
