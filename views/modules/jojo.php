<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>hola</h1>
        <?php
        $vehicleURL = 'http://icsseseguridad.com/location-security/public/vehicle';
        $vehicleFeed = file_get_contents($vehicleURL);
        $vehicleFeed;
        ?>
    </body>
</html>