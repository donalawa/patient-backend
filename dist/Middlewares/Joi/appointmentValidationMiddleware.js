"use strict";
/*
 * Author: Donacien
 * Contributors:
 *
 * Project:
 * The item Joi validation middleware
 * Created on Friday oct 21 2022

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require('joi');
const messages_1 = __importDefault(require("../../Messages/messages"));
const response_1 = __importDefault(require("../../Messages/response"));
/**
 *
 *  use to perform new item validation
 *  @param req - request object
 *  @param next  - calls the next method
 *  @return boolean
 */
let validateAppointmentCreation = (req, res, next) => {
    const appointmentSchema = joi.object({
        name: joi.string().required(),
        sex: joi.string().required(),
        phone: joi.string().required(),
        email: joi.string().required(),
        address: joi.string().required(),
        city: joi.string().required(),
        appointment_date: joi.date(),
        first_time: joi.string().valid('Yes', 'No').required(),
        request_date: joi.date().required(),
        appointment_status: joi.string(),
        appointment_time: joi.string(),
        note_before_appointment: joi.string().required(),
        note_after_appointment: joi.string()
    });
    appointmentSchema.validateAsync(req.body).then(val => {
        return next();
    }).catch(err => {
        res.status(response_1.default.BAD_REQUEST_400);
        res.json({
            message: messages_1.default.REQUIRED_FEILD,
            success: false,
            error: err.message
        });
    });
};
let validateAppointmentEditing = (req, res, next) => {
    const appointmentSchema = joi.object({
        name: joi.string().min(1),
    });
    appointmentSchema.validateAsync(req.body).then(val => {
        return next();
    }).catch(err => {
        res.status(response_1.default.BAD_REQUEST_400);
        res.json({
            message: messages_1.default.REQUIRED_FEILD,
            success: false,
            error: err.message
        });
    });
};
exports.default = { validateAppointmentCreation, validateAppointmentEditing };
