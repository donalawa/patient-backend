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
// import * as admin from 'firebase-admin';
const index_1 = __importDefault(require("../Firebase/index"));
const firestore = index_1.default.firestore();
let addItem = (req, res) => {
    let { name } = req.body;
    if (!name) {
        res.status(response_1.default.BAD_REQUEST_400).json({ message: messages_1.default.REQUIRED_FEILD });
    }
    firestore.collection("items").add({ name }).then(val => {
        res.status(response_1.default.CREATED_201);
        res.json({ message: messages_1.default.OKAY });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
let getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let size = req.query.size ? req.query.size : 10;
    size = parseInt(size);
    let lastIndex = req.query.lastIndex ? req.query.lastIndex : undefined;
    const first = firestore.collection('items')
        .orderBy('name')
        .limit(size);
    const snapshot = yield first.get();
    if (!lastIndex) {
        first.get().then(val => {
            let data = [];
            val.docs.forEach((doc) => {
                data.push(doc.data());
            });
            res.status(response_1.default.CREATED_201);
            res.json({ message: messages_1.default.OKAY, docs: data });
        }).catch(err => {
            res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
            res.json({ message: messages_1.default.FAILED });
        });
    }
    else {
        const last = snapshot.docs[lastIndex];
        const next = firestore.collection('items')
            .orderBy('name')
            .startAfter(last.data().name)
            .limit(size);
        next.get().then(val => {
            let data = [];
            val.docs.forEach((doc) => {
                data.push(doc.data());
            });
            res.status(response_1.default.CREATED_201);
            res.json({ message: messages_1.default.OKAY, docs: data });
        }).catch(err => {
            res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
            res.json({ message: messages_1.default.FAILED });
        });
    }
});
let getItem = (req, res) => {
    let id = req.params.id;
    if (!id)
        res.status(response_1.default.BAD_REQUEST_400).json({ message: messages_1.default.REQUIRED_FEILD });
    firestore.collection("items").doc(id).get().then(val => {
        res.status(response_1.default.CREATED_201);
        res.json({ message: messages_1.default.OKAY, doc: val.data() });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
let deleteItem = (req, res) => {
    let id = req.params.id;
    if (!id)
        res.status(response_1.default.BAD_REQUEST_400).json({ message: messages_1.default.REQUIRED_FEILD });
    firestore.collection("items").doc(id).delete().then(val => {
        res.status(response_1.default.CREATED_201);
        res.json({ message: messages_1.default.OKAY });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
let editItem = (req, res) => {
    let id = req.params.id;
    firestore.collection("items").doc(id).update(req.body).then(val => {
        res.status(response_1.default.CREATED_201);
        res.json({ message: messages_1.default.UPDATED });
    }).catch(err => {
        res.status(response_1.default.INTERNAL_SERVER_ERROR_500);
        res.json({ message: messages_1.default.FAILED });
    });
};
exports.default = {
    addItem,
    getItems,
    getItem,
    deleteItem,
    editItem
};
