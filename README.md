# Foto App

## Task 1.2
[Task 1.2](/docs/onderzoek.md)

## Autor
Tim Terwijn

### Demo:
I will work with Ngrok, the url for the demo is: ... (I will provide the teacher with my URL during the presentation.)

### Description
With this app you can add pictures of your holiday. Then you can look trough your images as a carousel. The app has to work on multiple browsers, and the core functionalists has to work on all browsers. By first working on the core functionalists in plain html and server side JS, I was able to overcome this requirement pretty easy with progressive enhancement instead of graceful degradation.

### Logo
![layer3](/docs/layer2.5.PNG)

### Table of contents
* [Install guide](#install-guide)  
* [How to use](#how-to-use)  
* [Wireflow](#wireflow)  
* [User experience](#user-experience)  
* [Difficulties](#difficulties)  
* [Progressive enhancement](#progressive-enhancement)  
* [Feature detection](#feature-detection)  
* [Road map (and feedback)](#Road-map-(and-feedback))  

### Install guide
#### Requirements
* Clone or download the repository $ git clone https://github.com/TimTerwijn/browser-technologies-1920.git  
* Open server folder with VSCode.  
* Open terminal en enter npm install.  
* Enter npm start in terminal.  
* Go to http://localhost:3000/ to use the app.  

### How to use
* Click on an image to see the next image.  
* Click on the back button to see the previous image.  

### Wireflow
You can test the wireflow live with the Balsamiq file in the docs folder.  
  
Here is an image of that wireflow.  
![Wireflow](/docs/Wireflow.png)

### User experience
The user is able to use the keyboard in the application because I made use of anchor elements who are focus able.  
The can also been used by screen readers because I used alt attributes for my images, also I made use of anchor and p elements.    

### Difficulties
1. Working serverside was new and confusing for me. I fixed it by making two folders to separate the files.
2. Putting the code online was quite hard for me, because I did not understand Heroku, I got feedback how to do it, but because of time issues, for the demo I will use something I am familiar with. Ngrok.
3. Adding images to the server was also quite hard. A lot of tools added the image as a binary. I fixed it with some tools and npm Multer.
4. The swap image animation was hard, swapping to the next image was easy but previous was hard. Because the image you want to show next has to be under the current image. First I tried too swap the sibling locations but JS was to fast. That is why I added some timers.


### Progressive enhancement
I used 4 layers for this application.  

* The first layer is pure functionality without style and scripts. The site looks bad but it works.  
![layer1](/docs/layer1.PNG)

* The second layer is with css for older browsers, so that those users can also see a decent layout.  
![layer2](/docs/layer2.PNG)

* The second and a half layer is with advanced css for newer browsers. I made use of several flexboxes with the help of a css @support.  
![layer2.5](/docs/layer2.5.PNG)

* The third and last layer is for javascript to add some nice transition when someone presses one of the buttons or image.  
![layer3](/docs/layer3.PNG)

### Feature detection
I used @support to check if the client could use flexboxes. Also I add a id to the main element with javascript to ensure that I only make use of the layer 3 css if there is javascript.

### Road map (and feedback)
* ~~Work on add image function.~~
* ~~Arrow buttons to navigate trough images.~~
* Enhancment to Preview images on add image.
* Style browse button on add image.
* Navigate the images with beads.
* Keep images in scale
