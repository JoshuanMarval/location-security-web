<?php
/**
 * Created by PhpStorm.
 * User: Joshuan Marval
 * Date: 06/08/2018
 * Time: 02:20 PM
 */

class Monitoreo
{



   public function getGuards(){
       $guardURL = 'http://icsseseguridad.com/location-security/public/guard';
       $guardFeed = json_decode(file_get_contents($guardURL), true);

       return $guardFeed;
   }

   public function getVehicles(){
       $vehicleURL = 'http://icsseseguridad.com/location-security/public/vehicle';
       $vehicleFeed = json_decode(file_get_contents($vehicleURL), true);

       return $vehicleFeed;
   }



}