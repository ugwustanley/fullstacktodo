import { NextFunction, Request, Response } from "express";
import { BadRequest, NotFound } from "../middleware/error_handler";


export default class TodoValidator {




    /**
     * Login  Validation Handler
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
    static on_add(req: Request, res: Response, next: NextFunction) {

        const {id , title, dueAt }: {id: string, title: string , dueAt: string} = req.body;

        console.log(req.body , id , title , dueAt);

        if (!id || !title || !dueAt) next(new BadRequest("username is required"));

        if (title.length < 10) next(new BadRequest("Title is too short"));


        next();
    }

    /**
     * Login  Validation Handler
     * @param req Request
     * @param res Response
     * @param next NextFunction
     */
     static todo(req: Request, res: Response, next: NextFunction) {

        const {id}= req.query;
      

        if (!id) next(new BadRequest("username is required"));

        next();
    }



}