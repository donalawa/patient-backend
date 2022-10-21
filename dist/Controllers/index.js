"use strict";
/**
   * This is used to import all controllers, organize them and export them
    name}
    * @author Author/Donacien
    * @date Friday oct 21 2022
    * Contributors : contributor name,
 **/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appointment_controller_1 = __importDefault(require("./appointment.controller"));
exports.default = {
    // Appointments
    addAppointment: appointment_controller_1.default.addAppointment,
    getAppointments: appointment_controller_1.default.getAppointments,
    getAppointment: appointment_controller_1.default.getAppointment,
    deleteAppointment: appointment_controller_1.default.deleteAppointment,
    editAppointment: appointment_controller_1.default.updateAppointment,
};
