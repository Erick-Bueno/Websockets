import  Express  from "express";
import {Request, Response} from 'express'
const router = Express.Router()

router.get("/", async function(req:Request, res:Response) {
    res.send("ola")
})


export default router