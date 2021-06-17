import { BadRequest, NotFound } from "../middleware/error_handler";
import Database from "./database";

const userDb = new Database("todo");



export default class Todo {

    id: string;
    title: string;
    dueAt: string;
    status:boolean;




    constructor(id: string, title: string , dueAt: string) {
        this.id = id;
        this.title = title;
        this.dueAt = dueAt;
        this.status = false;
    }


    static getTodo(id:any) {

        const todo = userDb.read(id);

        if (!todo) throw new NotFound("No matching todo item found");

        return todo;
    }

    static getTodos() {

        const todo = userDb.readAll();

        if (!todo) return [];

        return todo;
    }





    async addTodo() {
        const todo = await userDb.read(this.id);
        if(todo){
            this.status = false;
            console.log('it passed through here')
            return this.toJson()
        }
        if(!todo){
        this.status = true
        await userDb.create(this.id, this.toJson());
        console.log('it didi passed through here')
        return this.toJson();
        }
    }


    toJson() {
        return {
           status:this.status,
           id:this.id,
           title:this.title,
           dueAt:this.dueAt
        }
    }


}



