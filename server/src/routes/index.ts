import { Router } from "express";
import UserRoute from "./user";
import TodoRoute from './todo'

const route = Router();


route.use("/user", UserRoute);
route.use("/todo", TodoRoute);



export default route;




