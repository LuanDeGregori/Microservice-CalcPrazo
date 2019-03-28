import {Request, Response} from "express";
import {getManager} from "typeorm";


export async function Test(request: Request, response: Response) {

    response.status(200).json({msg: "Successful"})
}