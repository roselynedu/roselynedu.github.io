Add a new photo:

1. Add image file to Images folder
2. Open this project in a text editor or VSCode
3. Edit the file gallery.html
4. Add an image tag to the gallery section you want to add to
   example:
   <img src="Images/test.jpg">
5. If you want to add a new section after City and Nature, copy and paste the entire section of code and add it to the page:
    <!--Third Test Gallery Section-->
          <div class="gallery_section">
            <h1>Nature</h1>
            <div class="gallery_wrap">
                <img src="back.png" id="back_button">
                <div class="gallery">
                    <div class="gallery_active">
                       <img src="Images/test.jpg">
                      
                    </div>
                </div>
                <div id="fullpage" onclick="this.style.display='none';"></div>
                <img src="next.png" id="next_button">
              </div>
            </div>
        <!--End of Third Test Gallery-->

6. Save file
7. To test locally, open the html file from your local computer (it should open in chrome)
8. If all looks good, open Github Desktop and name your commit
9. Push to origin
