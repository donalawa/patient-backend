/*
 * Author: Donacien
 * Contributors: 
 *
 * Project: 
 * Here the routes are exported 
 * Created on Friday oct 21 2022

 */

/**
 * @apiDefine secretariat:computer User access only
 * This optional description belong to to the group admin.
 */
import testRoutes from './test.route';
import appointmentRoutes from "./appointment.route";



export default{
    testRoutes,
    appointmentRoutes,
    
}