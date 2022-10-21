"use strict";
/*
 * Author: Donacien
 * Contributors:
 *
 * Project:
 * Here the routes are exported
 * Created on Friday oct 21 2022

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @apiDefine secretariat:computer User access only
 * This optional description belong to to the group admin.
 */
const test_route_1 = __importDefault(require("./test.route"));
const appointment_route_1 = __importDefault(require("./appointment.route"));
exports.default = {
    testRoutes: test_route_1.default,
    appointmentRoutes: appointment_route_1.default,
};
