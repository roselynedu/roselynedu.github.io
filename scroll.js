let scroll_container = document.querySelector(".gallery");
let back_button = document.getElementById("back_button");
let next_button = document.getElementById("next_button");

var gallery_positionInfo = scroll_container.getBoundingClientRect();

if (screen.width > 900){
  scroll_container.addEventListener("wheel", (event) => {
    //event.preventDefault();
    //scroll_container.scrollLeft += event.deltaY;
});

next_button.addEventListener("click", () => {
    scroll_container.style.scrollBehavior = "smooth";
    scroll_container.scrollLeft += gallery_positionInfo.width;
});

back_button.addEventListener("click", () => {
    scroll_container.style.scrollBehavior = "smooth";
    scroll_container.scrollLeft -= 900;
});
}



document.querySelectorAll('.gallery_active img').forEach(function(image) {
  image.addEventListener('click', function() {
      const fullPage = document.getElementById('fullpage');
      
      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Set the background image of the full screen div to the clicked image
      fullPage.style.backgroundImage = 'url(' + image.src + ')';
      
      // Set the position of the full page image to appear at the scroll position
      fullPage.style.top = scrollY + 'px';  // Use scroll position
      
      // Show the full-screen image
      fullPage.style.display = 'block';
  });
});

document.getElementById('fullpage').addEventListener('click', function() {
  this.style.display = 'none';
});

