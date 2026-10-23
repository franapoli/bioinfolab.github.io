// Masonry layout for the News and Publications grid. Cards are taken in
// chronological order (newest first) and each goes into the currently
// shortest column (leftmost on ties), so newer cards always sit higher
// and older ones appear while scrolling down. Rows are 1px tall, so a
// card's row span equals its height.
(function () {
    var grid = document.querySelector('#portfolio .news-grid');
    if (!grid || !window.CSS || !CSS.supports('display', 'grid')) return;

    var GAP = 30;

    function layout() {
        grid.classList.add('masonry-ready');
        var items = grid.querySelectorAll('.portfolio-item');
        var i;
        // Clear previous placement first, or stale column indexes would
        // create implicit extra columns after a resize.
        for (i = 0; i < items.length; i++) {
            items[i].style.gridColumn = '';
            items[i].style.gridRow = '';
        }

        var cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
        var heights = [];
        for (var c = 0; c < cols; c++) heights.push(0);

        for (i = 0; i < items.length; i++) {
            var col = 0;
            for (c = 1; c < cols; c++) {
                if (heights[c] < heights[col]) col = c;
            }
            var span = Math.ceil(items[i].getBoundingClientRect().height) + GAP;
            items[i].style.gridColumn = String(col + 1);
            items[i].style.gridRow = (heights[col] + 1) + ' / span ' + span;
            heights[col] += span;
        }
    }

    var imgs = grid.querySelectorAll('img');
    for (var i = 0; i < imgs.length; i++) {
        if (!imgs[i].complete) imgs[i].addEventListener('load', layout);
    }

    // Re-layout when the grid's width changes (window resize, rotation, zoom).
    var timer, lastWidth = grid.clientWidth;
    function onResize() {
        if (grid.clientWidth === lastWidth) return;
        lastWidth = grid.clientWidth;
        clearTimeout(timer);
        timer = setTimeout(layout, 100);
    }
    if (window.ResizeObserver) {
        new ResizeObserver(onResize).observe(grid);
    } else {
        window.addEventListener('resize', onResize);
    }
    window.addEventListener('load', layout);
    layout();
})();
