(function(window, document, undefined) {

    // Add image paths here change home page background
    var images = [
        'Images/background.png', 'Images/banff_lake1.JPG', 'Images/banff_lake2.JPG',
        'Images/lakepic.JPG', 'Images/IMG_1399.jpg'
    ];

    var currentIndex = 0;
    var fadeDuration = 1000; // ms
    var slideDuration = 5000; // ms per slide

    window.onload = init;

    function init() {
        const layerA = document.querySelector('.background_layer_a');
        const layerB = document.querySelector('.background_layer_b');

        if (!layerA || !layerB) return;

        let active = layerA;
        let next = layerB;

        active.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        active.classList.add('visible');

        active.classList.remove('zooming');
        void active.offsetWidth;
        active.classList.add('zooming');

        setInterval(nextSlide, slideDuration);

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;

            next.style.backgroundImage = 'url(' + images[currentIndex] + ')';
            next.classList.remove('zooming');
            void next.offsetWidth;
            next.classList.add('zooming');

            next.classList.add('visible');
            active.classList.remove('visible');

            // swap roles for the next cycle
            const temp = active;
            active = next;
            next = temp;
        }
    }

})(window, document, undefined);
