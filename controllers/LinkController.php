<?php
/**
 * Created by PhpStorm.
 * User: Joshuan Marval
 * Date: 06/08/2018
 * Time: 11:06 AM
 */

class LinkController
{
    
    
    public function callTemplate(){
        include "views/template.php";
    }
    
    
    public function getSection(){
        if(isset($_GET["action"])){
            $link = $_GET["action"];

            include $this->setLinks($link);

        }else{

            include $this->setLinks("");
        }
    }



    private function setLinks($link){

        if($link == "dashboard" || $link == "reports" ){
            $section = "views/modules/" . $link .".php";
        }else{
            $section = "views/modules/maps.php";
        }

        return $section;

    }
    
}