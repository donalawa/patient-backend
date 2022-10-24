"use strict";
/*
 * Author: Donacien
 * Contributors:
 *
 * Project: patient system
 * Items controller file
 * Created on Friday oct 21 2022
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../Messages/response"));
const messages_1 = __importDefault(require("../Messages/messages"));
const index_1 = __importDefault(require("../Firebase/index"));
const firestore = index_1.default.firestore();
let addAppointment = (req, res) => {
    // WRITE APPOINTMENT CODE
    let { name, gender, phone, email, address, city, age, appointment_date, first_time, request_date, appointment_status, appointment_time, uniqueCode, note_before_appointment, note_after_appointment } = req.body;
    if (!name) {
        res.status(response_1.default.BAD_REQUEST_400).json({ message: messages_1.default.REQUIRED_FEILD });
    }
    firestore.collection("appointments").add({
        name,
        gender,
        phone,
        email,
        address,
        city,
        age,
        appointment_date: appointment_date ? appointment_date : "",
        first_time,
        request_date,
        appointment_status,
        appointment_time: appointment_time ? appointment_time : "",
        uniqueCode,
        note_before_appointment,
        note_after_appointment: note_after_appointment ? note_after_appointment : ""
    }).then(val => {
        res.status(response_1.default.CREATED_201);
        res.json({ message: messages_1.default.APPOINTMENT_ADDED });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
let getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // GET ALL APPOINTMENTS
    let size = req.query.size ? req.query.size : 100;
    size = parseInt(size);
    let lastIndex = req.query.lastIndex ? req.query.lastIndex : undefined;
    const first = firestore.collection('appointments')
        .orderBy('name')
        .limit(size);
    const snapshot = yield first.get();
    if (!lastIndex) {
        first.get().then(val => {
            let data = [];
            val.docs.forEach((doc) => {
                data.push(Object.assign(Object.assign({}, doc.data()), { id: doc.id }));
            });
            res.status(response_1.default.OK_200);
            res.json({ docs: data });
        }).catch(err => {
            res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
            res.json({ message: messages_1.default.FAILED, err });
        });
    }
    else {
        const last = snapshot.docs[lastIndex];
        const next = firestore.collection('appointments')
            .orderBy('name')
            .startAfter(last.data().name)
            .limit(size);
        next.get().then(val => {
            let data = [];
            val.docs.forEach((doc) => {
                data.push(Object.assign(Object.assign({}, doc.data()), { id: doc.id }));
            });
            res.status(response_1.default.CREATED_201);
            res.json({ message: messages_1.default.OKAY, docs: data });
        }).catch(err => {
            res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
            res.json({ message: messages_1.default.FAILED });
        });
    }
});
let getAppointment = (req, res) => {
    // GET SINGLE APPOINTMENT
    let id = req.params.id;
    if (!id)
        res.status(response_1.default.BAD_REQUEST_400).json({ message: messages_1.default.REQUIRED_FEILD });
    firestore.collection("appointments").doc(id).get().then(val => {
        res.status(response_1.default.CREATED_201);
        // console.log("RES DATA", val);
        res.json({ message: messages_1.default.OKAY, doc: Object.assign(Object.assign({}, val.data()), { id: val.id }) });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
let deleteAppointment = (req, res) => {
    let id = req.params.id;
    if (!id)
        res.status(response_1.default.BAD_REQUEST_400).json({ message: messages_1.default.REQUIRED_FEILD });
    firestore.collection("appointments").doc(id).delete().then(val => {
        res.status(response_1.default.CREATED_201);
        res.json({ message: messages_1.default.OKAY });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
let updateAppointment = (req, res) => {
    let id = req.params.id;
    firestore.collection("appointments").doc(id).update(req.body).then(val => {
        res.status(response_1.default.CREATED_201);
        res.json({ message: messages_1.default.UPDATED });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
exports.default = {
    addAppointment,
    getAppointments,
    getAppointment,
    deleteAppointment,
    updateAppointment
};
