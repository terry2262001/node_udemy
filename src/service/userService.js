import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashPassword(password);
  try {
    await db.User.create({
      email: email,
      password: hashPass,
      username: username,
    });
  } catch (error) {
    console.log(">>>> ERROR userService", error);
  }
};
const getUserList = async () => {
  let user = [];
  user = await db.User.findAll();
  return user;
  // create the connection, specify bluebird as Promise
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwt",
  //   Promise: bluebird,
  // });

  // try {
  //   const [rows, fields] = await connection.execute("SELECT * FROM `user` ");
  //   return rows;
  // } catch (error) {
  //   console.log(">>check error", error);
  // }
};
const deleteUser = async (userId) => {
  // const connection = await mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     database: "jwt",
  //     Promise: bluebird,
  //   });

  //   try {
  //     const [rows, fields] = await connection.execute('DELETE FROM user where id= ?',[id]);
  //     return rows;
  //   } catch (error) {
  //     console.log(">>check error", error);
  //   }
  await db.User.destroy({
    where: { id: userId },
  });
};

const getUserById = async (id) => {
  let user = {};
  user = await db.User.findOne({ where: { id: id } });
  return user.get({ plan: true });
  // const connection = await mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     database: "jwt",
  //     Promise: bluebird,
  //   });

  //   try {
  //     const [rows, fields] = await connection.execute('SELECT * FROM user where id = ?',[id]);
  //     return rows;
  //   } catch (error) {
  //     console.log(">>check error", error);
  //   }
};
const updateUserInfo = async (email, username, id) => {
  // const connection = await mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     database: "jwt",
  //     Promise: bluebird,
  //   });

  //   try {
  //     const [rows, fields] = await connection.execute('UPDATE user SET email = ?,username =? where id = ?',[email,username,id]);
  //     return rows;
  //   } catch (error) {
  //     console.log(">>check error", error);
  //   }
  await db.User.update(
    { email: email, username: username },
    { 
      where: {id: id }
    }
  );

};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfo,
};
