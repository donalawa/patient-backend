/*
 * Author: Donacien
 * Contributors: 
 *
 * Project: 
 * This is used to boot up our API
 * Created on Friday oct 21 2022

 */


import express = require('express');

import cors = require('cors');


import allRouters from "../Routes/index"

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
const registerRoutes =  (routers: any): void  => {
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
    } catch (err) {
        console.log(`BOOT :: Error while registering routes. Check routes `);
    }
};
    registerRoutes(allRouters ? allRouters : {});
    app.listen(process.env.PORT || 8080, () => {
  
        
    console.log("BOOT :: ",'Server Started', `http://localhost:8080`)
})
}

export default startApp;

