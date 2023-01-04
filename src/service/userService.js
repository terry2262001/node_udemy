import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createNewUser = async (email, password, username) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  let hashPass = hashPassword(password);
  try {
    const [rows, fields] = await connection.execute(
        "INSERT INTO  users (email,password,username) VALUES(?,?,?)",
        [email, hashPass, username]
      );
    
  } catch (error) {
    console.log(">>>> ERROR userService",error);
    
  }


};
const getUserList = async () => {
  // create the connection, specify bluebird as Promise
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM `users` ");
    return rows;
  } catch (error) {
    console.log(">>check error", error);
  }
 
};
const deleteUser  = async (id) => {
    
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "jwt",
        Promise: bluebird,
      });
    
      try {
        const [rows, fields] = await connection.execute('DELETE FROM users where id= ?',[id]);
        return rows;
      } catch (error) {
        console.log(">>check error", error);
      }
  }

module.exports = { createNewUser, getUserList,deleteUser };
