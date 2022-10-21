"use strict";
/*
 * Author: Donacien
 * Contributors:
 *
 * Project:
 * This is are the response messages for our api
 * Created on FRIDAY Oct 21 2022

 */
Object.defineProperty(exports, "__esModule", { value: true });
const statusMessage = {
    UNAUTHORISED: "USER IS UN_AUTHORISED",
    SERVER_STARTED: "SERVER RUNNING ON: ",
    APPOINTMENT_ADDED: "PATIENT APPOINTMENT ADDED SUCCESSFULY: ",
    DATABASE_SUCCESS: "CONNECTED TO DATABASE",
    REQUIRED_FEILD: "REQUIRED FIELD MISSING",
    FAILED: "FAILED TO PERFORM ACTION",
    OKAY: "SUCCESS",
    UPDATED: "UPDATE SUCCESSFUL",
};
exports.default = statusMessage;
