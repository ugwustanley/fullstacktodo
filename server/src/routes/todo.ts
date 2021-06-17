import { Router } from "express";
import TodoValidator from "../validation/todo"
import TodoController from '../controller/todo'


const route = Router();




route.get("/todos", TodoController.todos)

route.get("/todo",TodoValidator.todo,TodoController.todo)

route.post("/add",TodoValidator.on_add,TodoController.on_add)




export default route;




