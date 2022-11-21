# layoutExercises

<strong>Task</strong>: 
Write the HTML and CSS code to create a front-end photo gallery that adapts to three types of screen sizes as shown in the images mobilePhotos.png, tabletPhotos.png and widerPhotos.png The typical tablet screen size width starts at 768px while the wider screens should have a layout width starting at 1024px.  You can use the Device Mode in DevTools to view the layout on these screen widths or just resize the browser window.

RUBRIC
Total: 15 points

5 points/per each completed photo gallery 

Requirements:

- Set your image source to
https://source.unsplash.com/collection/190727/800x600 to get a random image.

- Sometimes you may get duplicate images as a result of caching. To prevent this, append
a question mark and a sequence number to the URL of the image source: 
https://source.unsplash.com/collection/190727/800x600?1

- In your CSS file, use comments to add your name and a brief comment to indicate the mobile, tablet and wider screen version

Hints and extra help:

- Build this gallery from scratch using the mobile-first approach. 

- Note that on mobile, we have a single column. On tablets, we have two columns. On
laptops and wider screens, we have three columns and the third image takes up the
space of four images.

- To make the images fit the containing cell, you should give them a width of 100% and set
their object-fit property to <strong>cover</strong> so they don’t get squashed.
