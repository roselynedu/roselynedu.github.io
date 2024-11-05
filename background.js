(function(window, document, undefined) {

    var images = [
        'Images/background.png', "Images/banff_lake1.JPG", "Images/banff_lake2.JPG", 
        "Images/lakepic.JPG", "Images/IMG_1399.jpg"
    ];
    var currentIndex = 0;
  
    window.onload = init;
  
    function init() {
        // Select the div where the background image will be applied
        const element = document.querySelector(".background_image");

        // Set the initial background image immediately
        let firstImage = images[currentIndex];
        element.style.backgroundImage = 'url(' + firstImage + ')';
        
        // Apply the zoom effect to the first image
        element.style.transition = 'transform 30s ease-in-out, opacity 1s ease-in-out';
        element.style.transform = 'scale(1.2)'; 
        element.style.opacity = '1'; 
        
        // Start a cycle that changes the background image every 5 seconds
        setInterval(function() {
            console.log("Changing background image...");
            
            // Update the currentIndex to the next image in the array
            currentIndex = (currentIndex + 1) % images.length;
            
            var url = images[currentIndex];
            
            // Instantly reset zoom before transitioning to the next image
            element.style.transition = 'transform 0s'; 
            element.style.transform = 'scale(1)';
            

            // Set the next image, and fade it in
            element.style.transition = 'background-image 1s ease-in-out, opacity 1s ease-in-out'; 
            setTimeout(function() {
                element.style.backgroundImage = 'url(' + url + ')'; 
                element.style.opacity = '1';
            }, 500); 
            
            // After the fade-in completes, apply the zoom effect again
            setTimeout(function() {
                element.style.transition = 'transform 30s ease-in-out'; 
                element.style.transform = 'scale(1.2)'; 
            }, 1500); 
        }, 5000); 
    }

})(window, document, undefined);
