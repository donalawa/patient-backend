/**
   * This is used to import all controllers, organize them and export them
    name}
    * @author Author/Donacien
    * @date Friday oct 21 2022
    * Contributors : contributor name,
 **/
 
    import appointmentController from "./appointment.controller";
    

    export default {
   
        // Appointments
        addAppointment:appointmentController.addAppointment,
        getAppointments: appointmentController.getAppointments,
        getAppointment: appointmentController.getAppointment,
        deleteAppointment: appointmentController.deleteAppointment,
        editAppointment: appointmentController.updateAppointment,

    }