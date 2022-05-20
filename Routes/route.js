import express  from "express";
import  {addUser,  deleteUser,  getUser, getUserById, updateUser}  from "../controller/controller.js";

const route = express.Router();

route.get("/",getUser);
route.get("/:id",getUserById);
route.post("/adduser",addUser);
route.delete("/:id",deleteUser);
route.put("/:id",updateUser);


export default route;