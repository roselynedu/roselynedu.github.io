## Before making new changes:
1. Open Github Desktop
2. Pull Origin (if there's nothing to pull then don't worry)

## Adding a new photo:
1. Add image file to Images folder
2. Open this project in a text editor or VSCode
3. Edit the file `gallery.html`
4. Add an image tag to the gallery section you want to add to, example:
   ```
   <img src="Images/test.jpg">
   ```
6. If you want to add a new section after City and Nature, copy and paste the entire section of code and add it to the page:
   ```
    <!--Third Test Gallery Section-->
          <div class="gallery_section">
            <h1>Nature</h1>
            <div class="gallery_wrap">
                <img src="back.png" id="back_button">
                <div class="gallery">
                    <div class="gallery_active">
                        <!-- List of imgs -->
                       <img src="Images/test.jpg">
                      
                    </div>
                </div>
                <div id="fullpage" onclick="this.style.display='none';"></div>
                <img src="next.png" id="next_button">
              </div>
            </div>
        <!--End of Third Test Gallery-->
   ```

7. Save file
8. To test locally, open the html file from your local computer (it should open in chrome)
9. If all looks good, open Github Desktop and fill in the Summary box with what you did
10. Commit to main & Push origin


## Changing Home Page Background Images
1. Add new image file to Images folder
2. Open this project in a text editor or VSCode
3. Edit the file `background.js`
4. Add new image to the list `images`, example:
   ```
    // Add image paths here change home page background
    var images = [
        'Images/background.png', 
        'Images/banff_lake1.JPG', 
        'Images/banff_lake2.JPG',
        'Images/lakepic.JPG', 
        'Images/IMG_1399.jpg',
        'Images/new_image.jpg
    ];
   ```
5. NOTE, when you add the new image path to the list in step 4, make sure each image is separated by a comma (no comma or anything following the last image in the list)
6. Save file
7. To test locally, open the html file from your local computer (it should open in chrome)
8. If all looks good, open Github Desktop and fill in the Summary box with what you did
9. Commit to main & Push origin