/*
 * Author: Donacien
 * Contributors: 
 *
 * Project: 
 * This is a used for the documentation route
 * Created on Saturday oct 22 2022
 */


import * as express from "express";

const router = express.Router();
const path = require('path');
router.use(express.static('Doc/'));
/**
 * @api {get} /docs/ Documentation route 
 * @apiName Docs
 * @apiGroup Docs

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "message": "Working..."
 *     }
 * @apiErrorExample {string} Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get("/docs", (req: express.Request, res: express.Response) => {
    res.status(200);
    res.sendFile(path.resolve('Doc/index.html'));
});


export default router;