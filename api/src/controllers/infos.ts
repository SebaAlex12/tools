import { Request, Response } from "express";

import { getInfos } from '../models/infos';

const getInfosController = async (req:Request, res:Response) => {
    try{
        const infos = await getInfos();
        if(infos){
            res.json(infos);
        }
    }catch(error){
        console.log('error',error);
    }
}

export default {
    getInfosController
}