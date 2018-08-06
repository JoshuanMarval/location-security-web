<?php

$json = new Monitoreo();
$guardsFeed = $json -> getGuards();
$vehiclesFeed = $json -> getVehicles();



?>

<span id="vehicles-JSON"><?php  echo json_decode($vehicleURL) ?></span>

<!--Aside-->
<aside class="aside">
    <!--header aside-->
    <div class="header-aside" id="header-aside">
        <ul class="menu-items" id="menu-items">
            <li class="menu-item active-side">Notificaciones</li>
            <li class="menu-item">Dispositivos</li>
        </ul>
        <input class="filter" type="text" placeholder="Filtrar">
    </div>

    <div id="guard-cards-container" class="guard-cards-container">
        <!--Guard Card-->
        <?php for ($i = 0; $i < count($guardsFeed); $i++){?>
            <section id="guard-card" class="guard-card " >
                <h2 id="nameCard" class="guard-card-val">Nombre:  <?php echo $guardsFeed['data'][$i]['name']?> </h2>
                <p class="guard-card-val">CI. <?php echo $guardsFeed['data'][$i]['dni']?>   </p>
                <p class="guard-card-val">CI. <?php  echo $vehiclesFeed['data'][$i]['imei']?>   </p>
            </section>
        <?php }?>
    </div>
</aside>


<!--Maps-->
<main class="map" id="map-container">
    <div id="open_street_map" class="open_street_map"></div>
        <div hidden id="googleMap" class="googleMap"></div>
</main>


<div class="maps-options-container">
    <button id="osm-Button" class="map-button" onclick="openStreetMapMode()">OSM</button>
    <button id="gm-Button"  class="map-button" onclick="googleMapMode()">GM</button>
</div>


<!--   Notifications     -->
<div class="notification-container" >
    <header class="notification-header">Notificaciones</header>
    <div class="notification-cards-container" id="notification-cards-container">
        <!--Notification-cards-->
    </div>
</div>

<!-----------Script----------->

<script src="js/panel-maps/jquery-3.3.1.min.js"></script>


<script src="js/panel-maps/changeMapOptions.js"></script>
<script src="js/panel-maps/sidebar.js"></script>

<script src="js/panel-maps/notification.js"></script>


<!--OpenStreetMaps-->
<script type="application/javascript" src="https://unpkg.com/leaflet@1.3.3/dist/leaflet.js"></script>
<script src="js/panel-maps/OpenStreetMap.js"></script>

<!--Google Maps-->
<script src="js/panel-maps/GoogleMap.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnnU9xaS_i8x4_Ou9CZwVsVQX02RlxPlM&callback=initMap"></script>

