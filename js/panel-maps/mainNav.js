(function (d) {

    // let imported = d.getElementById('import-main-nav');
    // let content = imported.import.getElementById('items');
    // d.body.appendChild(d.importNode(content, true));

    //Main nav
    let mainNavOpts = Array.prototype.slice.apply(d.querySelectorAll('.list-item'));

    d.getElementById('items').addEventListener('click', e => {

        if (e.target.classList.contains("list-item")) {
            let i = mainNavOpts.indexOf(e.target);
            mainNavOpts.map(opt => opt.classList.remove('active'));
            mainNavOpts[i].classList.add('active');
        }

    });
})(document);