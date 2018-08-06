
//   chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

(function (d) {

    //Sidebar nav
    let sidebarNavOpts = Array.prototype.slice.apply(document.querySelectorAll('.menu-item'));

    d.getElementById('menu-items').addEventListener('click', ev => {

        if (ev.target.classList.contains('menu-item')) {
            let i = sidebarNavOpts.indexOf(ev.target);
            sidebarNavOpts.map(opt => opt.classList.remove('active-side'));
            sidebarNavOpts[i].classList.add('active-side');
        }
    });






    // API FETCH
    // fetch('http://icsseseguridad.com/location-security/public/guard/get')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //
    //         let container = d.getElementById('guard-cards-container');
    //
    //
    //         //Guard cards
    //         for (let i = 0; i<data.data.length; i++){
    //             container.innerHTML += '<section id="guard-card" class="guard-card " onclick="">\n' +
    //                 `<h2 class="guard-card-val"> ${data.data[i].name} </h2>` +
    //                 `<p class="guard-card-val">CI  ${data.data[i].dni} </p>\n` +
    //                 '</section>';
    //
    //
    //         }
    //
    //         d.getElementById('guard-card').addEventListener('click', ev => {
    //             let array = [];
    //             let values = d.getElementsByClassName('guard-card-val'),
    //                 getvalues = [].map.call(values, function (datos) {
    //                     array.push(datos.value);
    //                 });
    //             console.log(array)
    //
    //         });
    //
    //
    //     });


})(document);

