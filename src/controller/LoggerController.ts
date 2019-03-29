import {Request, Response} from "express";
import {getManager} from "typeorm";
import { Logs } from '../entity/Logs'


export async function Render(request: Request, response: Response) {
    
    const logsRepository = getManager().getRepository(Logs);

    var logs = await logsRepository.find()

    response.send(logs)
}