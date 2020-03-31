# Foto App

## Task 1.2
[Task 1.2](/docs/onderzoek.md)

## Autor
Tim Terwijn

### Demo:
I will work with Ngrok, the url for the demo is: ... (I will provide the teacher with my URL during the presentation.)

### Description
With this app you can add pictures of your holiday. Then you can look switch trough your images like a carousel.

### Logo
![Logo](/docs/logo.png)

### Table of contents
* [Install guide](#install-guide)
* [How to use](#how-to-use)
* [Wireflow](#wireflow)
* [User experience](#user-experience)
* [Difficulties](#difficulties)
* [Progressive enhancement](#progressive-enhancement)
* [Feature detection](#feature detection)
* [Roadmap](#roadmap)

### Install guide
#### Requirements
* Clone or download the repository $ git clone https://github.com/TimTerwijn/browser-technologies-1920.git
* Open server folder with VSCode.
* Open terminal en enter npm install.
* Enter npm start in terminal.
* Go to http://localhost:3000/ to use the app.

### How to use
* Click on an image to see the next image
* Click on the back button to see the previous image.

### Wireflow
You can test the wireflow live with the Balsamiq file in the docs folder.  
  
Here is an image of that wireflow.  
![Wireflow](/docs/Wireflow.png)

### User experience
The user is able to use the keyboard in the application because I made use of anchor elements who are focus able.  
The can also been used by screen readers because I used alt attributes for my images, also I made use of anchor and p elements.  

### Difficulties




### Progressive enhancement
I used 4 layers for this application.

* The first layer is pure functionality without style and scripts. The site looks bad but it works
![layer1](/docs/layer1.png)

* The second layer is with css for older browser so that they can also see some nice layouts.  
![layer2](/docs/layer2.png)

* The second and a half layer is with advanced css for newer browsers. I made use of flexboxes with the help of a @support
![layer2.5](/docs/layer2.5.png)

* The third and last layer is for javascript to add some nice transition when someone presses one of the buttons or image.
![layer3](/docs/layer3.png)

### Feature detection
I used @support to check if the client could use flexboxes. Also I add a id to the main element with javascript to ensure that I only make use of the layer 3 css if there is javascript.

### Road map
* Work on add image function.
* Arrow buttons to navigate trough images.
* Add the other layers.
* Make App Responsive.
