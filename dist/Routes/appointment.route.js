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
const appointmentValidationMiddleware_1 = __importDefault(require("../Middlewares/Joi/appointmentValidationMiddleware"));
const Controllers_1 = __importDefault(require("../Controllers"));
const router = express.Router();
/**
 * @api {post} /appointment  Create a new Appointment
 * @apiName Create
 * @apiGroup Appointment
 * @apiBody {String} name       the new name of the item
  * @apiPermission secretariat
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "message": "APPOINTMENT CREATED"
 *     }
 * @apiErrorExample {string} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *        "message": "FAILED TO PERFORM ACTION"
 *     }
 */
router.post("/appointment", appointmentValidationMiddleware_1.default.validateAppointmentCreation, Controllers_1.default.addAppointment);
/**
 * @api {get} /appointments  Get all Appointments
 * @apiName Get all
 * @apiGroup Appointment
 * @apiQuery {size} seletion size
 * @apiQuery {lastIndex} last index of the selected Appointments
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": "true",
 *       "message": "Working..."
 *       "docs":[array]
 *     }
 * @apiErrorExample {string} Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *        "message": "FAILED TO PERFORM ACTION"
 *     }
 */
router.get("/appointments", Controllers_1.default.getAppointments);
/**
 * @api {Get} /appointment/:id  Get a single Appointment by id
 * @apiName Get one
 * @apiGroup Appointment
 * @apiParam (Params) {id} id   Id of the Appointment

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
router.get("/appointment/:id", Controllers_1.default.getAppointment);
/**
* @api {delete} /appointment/:id  Delete a single Appointment by id
* @apiName delete
* @apiGroup Appointment
* @apiParam (Params) {id} id Id of the item
* @apiPermission secretariat
* @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "success": "true",
*       "message": "Working..."
*       "doc":{}
*     }
* @apiErrorExample {string} Error-Response:
*     HTTP/1.1 500 Server Error
*     {
*        "message": "FAILED TO PERFORM ACTION"
*     }
*/
router.delete("/appointment/:id", Controllers_1.default.deleteAppointment);
/**
* @api {patch} /appointment/:id  Update an Appointment by id
* @apiName Update
* @apiGroup Appointment
* @apiParam (Params) {id} id Id of the appointment
* @apiBody {String} name       the new name of the appointment
* @apiPermission secretariat
* @apiSuccessExample {json} Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "success": "true",
*       "message": "Working..."
*     }
* @apiErrorExample {string} Error-Response:
*     HTTP/1.1 500 Server Erroor
*     {
*        "message": "FAILED TO PERFORM ACTION"
*     }
*/
router.patch("/appointment/:id", appointmentValidationMiddleware_1.default.validateAppointmentEditing, Controllers_1.default.editAppointment);
exports.default = router;
