/*
 * Author: Donacien
 * Contributors: 
 *
 * Project: patient system
 * Items controller file 
 * Created on Friday oct 21 2022
 */

import { Request, Response } from "express";
import responseCodes from "../Messages/response";
import messages from "../Messages/messages"
import admin from '../Firebase/index';

const firestore = admin.firestore();  

let addAppointment = (req:Request,res:Response)=>{
    // WRITE APPOINTMENT CODE
    let {
        name, 
        gender, 
        phone, 
        email,  
        address, 
        city, 
        age,
        appointment_date, 
        first_time, 
        request_date, 
        appointment_status, 
        appointment_time, 
        uniqueCode,
        note_before_appointment, 
        note_after_appointment
    } = req.body;

    if(!name){
        res.status(responseCodes.BAD_REQUEST_400).json({message:messages.REQUIRED_FEILD})
    }
    firestore.collection("appointments").add({
        name, 
        gender, 
        phone, 
        email,  
        address, 
        city, 
        age,
        appointment_date: appointment_date ? appointment_date  : "", 
        first_time, 
        request_date, 
        appointment_status, 
        appointment_time: appointment_time ? appointment_time : "",
        uniqueCode, 
        note_before_appointment, 
        note_after_appointment: note_after_appointment ? note_after_appointment : ""
    }).then(val=>{
        res.status(responseCodes.CREATED_201);
        res.json({message:messages.APPOINTMENT_ADDED});
    }).catch(err=>{
        res.status(responseCodes.INTERNAL_SERVER_ERROR_500);
            res.json({message:messages.FAILED});
    })

}

let getAppointments = async (req:Request,res:Response)=>{
    // GET ALL APPOINTMENTS
   let size:any = req.query.size ? req.query.size: 100;
   size = parseInt(size) 
    let lastIndex:any = req.query.lastIndex? req.query.lastIndex: undefined;
   const first = firestore.collection('appointments')
  .orderBy('name')
  .limit(size);

const snapshot = await first.get();



if(!lastIndex){
    first.get().then(val=>{
        let data:any = [];
        val.docs.forEach((doc:any)=>{
            data.push({...doc.data(), id: doc.id})
        })
        res.status(responseCodes.OK_200);
        res.json({docs:data});
    }).catch(err=>{
        res.status(responseCodes.INTERNAL_SERVER_ERROR_500);
            res.json({message:messages.FAILED, err});
    })
}
else{
    const last = snapshot.docs[lastIndex];
     const next = firestore.collection('appointments')
  .orderBy('name')
  .startAfter(last.data().name)
  .limit(size); 

  next.get().then(val=>{
    let data:any = [];
    val.docs.forEach((doc:any)=>{
        data.push({...doc.data(), id: doc.id})
    })
    res.status(responseCodes.CREATED_201);
    res.json({message:messages.OKAY, docs:data});
}).catch(err=>{
    res.status(responseCodes.INTERNAL_SERVER_ERROR_500);
        res.json({message:messages.FAILED});
})
}


}

let getAppointment = (req:Request,res:Response)=>{
    // GET SINGLE APPOINTMENT
    let id = req.params.id;
    if(!id)  res.status(responseCodes.BAD_REQUEST_400).json({message:messages.REQUIRED_FEILD})
    firestore.collection("appointments").doc(id).get().then(val=>{
        res.status(responseCodes.CREATED_201);
        // console.log("RES DATA", val);
        res.json({message:messages.OKAY, doc:{...val.data(), id: val.id}});
    }).catch(err=>{
        res.status(responseCodes.INTERNAL_SERVER_ERROR_500);
        res.json({message:messages.FAILED});
    });
}

let deleteAppointment = (req:Request,res:Response)=>{
    let id = req.params.id;
    if(!id)  res.status(responseCodes.BAD_REQUEST_400).json({message:messages.REQUIRED_FEILD})
    firestore.collection("appointments").doc(id).delete().then(val=>{
        res.status(responseCodes.CREATED_201);
        res.json({message:messages.OKAY});
    }).catch(err=>{
        res.status(responseCodes.INTERNAL_SERVER_ERROR_500);
        res.json({message:messages.FAILED});
    });
}

let updateAppointment = (req:Request,res:Response)=>{
    let id = req.params.id;
    
    firestore.collection("appointments").doc(id).update(req.body).then(val=>{
        res.status(responseCodes.CREATED_201);
        res.json({message:messages.UPDATED});
    }).catch(err=>{
        res.status(responseCodes.INTERNAL_SERVER_ERROR_500);
        res.json({message:messages.FAILED});
    });
}

export default {
    addAppointment,
    getAppointments,
    getAppointment,
    deleteAppointment,
    updateAppointment
}