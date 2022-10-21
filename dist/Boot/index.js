"use strict";
/*
 * Author: Donacien
 * Contributors:
 *
 * Project:
 * This is used to boot up our API
 * Created on Friday oct 21 2022

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const index_1 = __importDefault(require("../Routes/index"));
/**
 *
 * use to BOOT and start server
 */
let startApp = () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    /**
     *
     * use automatically add all exported routes
     *  @param routers - all exported routers
     */
    const registerRoutes = (routers) => {
        try {
            if (Object.keys(routers) && Object.keys(routers).length) {
                console.log(`BOOT :: Registering routes started`);
                // let i = 0;
                Object.keys(routers).forEach(key => {
                    // console.log("KEY:  ",  key)
                    app.use("/", routers[key]);
                });
                console.log("BOOT :: Registering routes done");
            }
        }
        catch (err) {
            console.log(`BOOT :: Error while registering routes. Check routes `);
        }
    };
    registerRoutes(index_1.default ? index_1.default : {});
    app.listen(8080, () => {
        console.log("BOOT :: ", 'Server Started', `http://localhost:8080`);
    });
};
exports.default = startApp;
