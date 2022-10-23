/*
 * Author: Donacien
 * Contributors: 
 *
 * Project: 
 * The item Joi validation middleware 
 * Created on Friday oct 21 2022

 */

const joi = require('joi');
import messages from "../../Messages/messages";
import response from "../../Messages/response";
import { Request, Response } from "express";
/**
 * 
 *  use to perform new item validation
 *  @param req - request object
 *  @param next  - calls the next method
 *  @return boolean
 */
let validateAppointmentCreation = (req: Request, res: Response, next: any) => {
    const appointmentSchema = joi.object({
        uniqueCode: joi.string(),
        name: joi.string().required(),
        gender: joi.string().required(), 
        phone: joi.string().required(), 
        email: joi.string().required(),  
        address: joi.string().required(), 
        city: joi.string().required(), 
        appointment_date: joi.date(), 
        first_time: joi.string().valid('Yes', 'No').required(), 
        request_date: joi.date().required(), 
        appointment_status: joi.string().valid('missed', 'rescheduled', 'success', 'pending'), 
        appointment_time: joi.string(), 
        note_before_appointment: joi.string().required(), 
        note_after_appointment: joi.string()
    });

    appointmentSchema.validateAsync(req.body).then(val => {
        return next();
    }).catch(err => {
        res.status(response.BAD_REQUEST_400);
        res.json({
            message: messages.REQUIRED_FEILD,
            success: false,
            error: err.message
        });
    })
}

let validateAppointmentEditing = (req: Request, res: Response, next: any) => {
    const appointmentSchema = joi.object({
        uniqueCode: joi.string(),
        name: joi.string(),
        gender: joi.string(), 
        phone: joi.string(), 
        email: joi.string(),  
        address: joi.string(), 
        city: joi.string(), 
        appointment_date: joi.date(), 
        first_time: joi.string().valid('Yes', 'No').required(), 
        request_date: joi.date(), 
        appointment_status: joi.string().valid('Missed', 'Rescheduled', 'Success', 'Pending'), 
        appointment_time: joi.string(), 
        note_before_appointment: joi.string().required(), 
        note_after_appointment: joi.string()
    });
    appointmentSchema.validateAsync(req.body).then(val => {
        return next();
    }).catch(err => {
        res.status(response.BAD_REQUEST_400);
        res.json({
            message: messages.REQUIRED_FEILD,
            success: false,
            error: err.message
        });
    })
}

export default { validateAppointmentCreation, validateAppointmentEditing };