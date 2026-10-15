// Masonry layout for the News and Publications grid: each card spans as many
// 1px grid rows as its height, so cards fill the gaps left by shorter ones above.
(function () {
    var grid = document.querySelector('#portfolio .news-grid');
    if (!grid || !window.CSS || !CSS.supports('display', 'grid')) return;

    var GAP = 30;

    function layout() {
        grid.classList.add('masonry-ready');
        var items = grid.querySelectorAll('.portfolio-item');
        for (var i = 0; i < items.length; i++) {
            items[i].style.gridRowEnd = 'auto';
            var h = items[i].getBoundingClientRect().height;
            items[i].style.gridRowEnd = 'span ' + Math.ceil(h + GAP);
        }
    }

    var imgs = grid.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
        if (!imgs[i].complete) imgs[i].addEventListener('load', layout);
    }

    var timer;
    window.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(layout, 100);
    });
    window.addEventListener('load', layout);
    layout();
})();
