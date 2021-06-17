import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../middleware/error_handler";
import { SuccessResult } from "../middleware/response";
import { _trySync } from "../middleware/try_catch";
import Todo from "../modules/todo";

export default class TodoController {




    static async on_add(req: Request, res: Response, next: NextFunction) {

        const {id , title , dueAt } = req.body;

        const TodoInstance:any = await new Todo(id, title,dueAt )

        await  TodoInstance.addTodo()
       //  console.log(err , todo , "e don show lol")
    
       // if (err) return next(err);
       let json = await TodoInstance.toJson()
       //console.log(json)
       if(json.status === false) next(new BadRequest('This is a bad request'))
       else{  
              res.status(200).send(new SuccessResult("todo successfully added", 200, TodoInstance.toJson()));
       }
    }

    static async todos(req: Request, res: Response, next: NextFunction) {

        const Todos = Todo.getTodos()

        if(Todos) res.status(200).send(Todos)
    }
    static async todo(req: Request, res: Response, next: NextFunction) {

        const { id } = req.query;

        const [err, todo] = _trySync(() => Todo.getTodo(id));
        //const Todos = Todo.getTodo(id)
        if(err) next(err)
        if(todo) res.status(200).send(todo)
    }


}