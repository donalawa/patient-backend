/*
 * Author: Donacien
 * Contributors: 
 *
 * Project: 
 * This is a used for the test route
 * Created on Friday oct 21 2022
 */

import * as express from "express";

const router = express.Router();
/**
 * @api {get} /test/ Test route
 * @apiName Test
 * @apiGroup Test

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "message": "Working..."
 *     }
 * @apiErrorExample {string} Error-Response:
 *     HTTP/1.1 404 Not Found
 */
router.get("/test", (req: any, res: any) => {
    res.status(200);
    res.json({
        success: true,
        messeage: "Working..."
    });
});


export default router;