"use strict";
/*
 * Author: Donacien
 * Contributors:
 *
 * Project:
 * This is a used for the item routes
 * Created on Friday oct 21 2022
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const itemValidationMiddleware_1 = __importDefault(require("../Middlewares/Joi/itemValidationMiddleware"));
const Controllers_1 = __importDefault(require("../Controllers"));
const router = express.Router();
/**
 * @api {post} /item/  Create Item
 * @apiName Create
 * @apiGroup Item
 * @apiBody {String} name       the new name of the item
  * @apiPermission admin
  * @apiPermission chef
  * @apiPermission hr
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "message": "Working..."
 *     }
 * @apiErrorExample {string} Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *        "message": "FAILED TO PERFORM ACTION"
 *     }
 */
router.post("/item", itemValidationMiddleware_1.default.validateItemCreation, Controllers_1.default.addItem);
/**
 * @api {get} /item/  Get all Items
 * @apiName Get all
 * @apiGroup Item
 * @apiQuery {size} seletion size
 * @apiQuery {lastIndex} last index of the selected items
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "message": "Working..."
 *       "docs":[array]
 *     }
 * @apiErrorExample {string} Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *        "message": "FAILED TO PERFORM ACTION"
 *     }
 */
router.get("/item", Controllers_1.default.getItems);
/**
 * @api {Get} /item/:id  Get a single Item by id
 * @apiName Getone
 * @apiGroup Item
 * @apiParam (Params) {id} id   Id of the item

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "message": "Working..."
 *       "doc":{}
 *     }
 * @apiErrorExample {string} Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *        "message": "FAILED TO PERFORM ACTION"
 *     }
 */
router.get("/item/:id", Controllers_1.default.getItem);
/**
* @api {delete} /item/:id  Delete a single Item by id
* @apiName delete
* @apiGroup Item
* @apiParam (Params) {id} id Id of the item
* @apiPermission admin
 * @apiPermission chef
 * @apiPermission hr
* @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "success": "true",
*       "message": "Working..."
*       "doc":{}
*     }
* @apiErrorExample {string} Error-Response:
*     HTTP/1.1 500 Not Found
*     {
*        "message": "FAILED TO PERFORM ACTION"
*     }
*/
router.delete("/item/:id", Controllers_1.default.deleteItem);
/**
* @api {patch} /item/:id  Update an Item by id
* @apiName Update
* @apiGroup Item
* @apiParam (Params) {id} id Id of the item
* @apiBody {String} name       the new name of the item
* @apiPermission admin
 * @apiPermission chef
 * @apiPermission hr
* @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "success": "true",
*       "message": "Working..."
*     }
* @apiErrorExample {string} Error-Response:
*     HTTP/1.1 500 Not Found
*     {
*        "message": "FAILED TO PERFORM ACTION"
*     }
*/
router.patch("/item/:id", itemValidationMiddleware_1.default.validateItemEditing, Controllers_1.default.editItem);
exports.default = router;
