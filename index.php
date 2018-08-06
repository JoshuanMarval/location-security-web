

<?php
    require_once "controllers/LinkController.php";
    require_once "controllers/Monitoreo.php";


$controller = new LinkController();
$controller -> callTemplate();