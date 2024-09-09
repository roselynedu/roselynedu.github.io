(function(window, document, undefined) {

    var images=['Images/background.png', "Images/mountains1.jpg"];
  
    window.onload = init;
  
    function init(){
        // const element = document.getElementById('background_image'); 
        const element = document.querySelector(".container");
        console.log(element);
        
        setInterval(function(){
            console.log("is it called");
            var url=images[Math.floor(Math.random() * images.length)];
            document.getElementById('.background_image').style.backgroundImage = 'url('+url+')';  
        },100);
    }
  
  })(window, document, undefined);