(function (d) {

    let container = d.getElementById('notification-cards-container');
    for (let i = 0; i<6; i++){

        container.innerHTML += '<section class="notification-card">\n' +
            '    <p class="notification-header-card">El guardia, ha marcado en el punto delta</p>\n' +
            '    <div class="body-card">\n' +
            '        <p>Manuel Eduardo</p>\n' +
            '        <p>CI 8463586</p>\n' +
            '        <p>Jueves Junio 26,2018 15:44:25</p>\n' +
            '    </div>\n' +
            '</section>';
    }


})(document);

