/*
 * Author: Donacien
 * Contributors: 
 *
 * Project: 
 * This is a used for the item routes
 * Created on Friday oct 21 2022
 */

import * as express from "express";
import appointmentMiddleWare from "../Middlewares/Joi/appointmentValidationMiddleware";
import Controllers from "../Controllers";

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
router.post("/appointment",appointmentMiddleWare.validateAppointmentCreation,Controllers.addAppointment);
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
 router.get("/appointments",Controllers.getAppointments);

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
 router.get("/appointment/:id",Controllers.getAppointment);

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
router.delete("/appointment/:id",  Controllers.deleteAppointment);


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
  router.patch("/appointment/:id",appointmentMiddleWare.validateAppointmentEditing,Controllers.editAppointment);

export default router;