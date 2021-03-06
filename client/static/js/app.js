function init(){

    //Check if using modern browser
    if(document.createElement("p").style.grid !== undefined){
        //enable layer 3 css
        const main = document.querySelector("main");
        main.id = "layer3Main";
        
        const newImage = document.querySelector("main>section:nth-child(3)>a>img:first-child");
        newImage.id = "selectedImage"; 
        
        //fix all the buttons
        enableButtons();
    }
};

function nextImage(){
    blockButtons();
    
    //find curent image
    const currentImage = document.getElementById("selectedImage");
    
    //find the next image
    let nextImage = currentImage.nextElementSibling;

    //set image name
    showImageName(nextImage);

    //check next image
    if(nextImage !== null){
        currentImage.id = null; 
        nextImage.id = "selectedImage";
    }else{
        //put nextImage below curent image
        nextImage = document.querySelector("main>section:nth-child(3)>a>img:first-child");
        currentImage.insertAdjacentElement("afterend", nextImage);

        //wait for that the image to be refactored
        setTimeout(function (){
            //do animation
            currentImage.id = null; 
            nextImage.id = "selectedImage"; 
        }, 20);
    }

    //wait for animation end
    setTimeout(function (){
        enableButtons();
    }, 1500);    
}

function previousImage(){
    blockButtons();
    
    //find curent image
    const currentImage = document.getElementById("selectedImage");
    
    //find the previous image
    let previousImage = currentImage.previousElementSibling;

    //check previous image
    if(previousImage === null){
        previousImage = document.querySelector("main>section:nth-child(3)>a>img:last-child");
    }

    //set image name
    showImageName(previousImage);

    //move previous image under current image for a effect
    currentImage.insertAdjacentElement("afterend", previousImage);
    blockButtons();

    //wait for that the image to be refactored
    setTimeout(function (){
        //do animation
        currentImage.id = null; 
        previousImage.id = "selectedImage"; 

        //wait for animation end
        setTimeout(function (){
            //reverse move (move current image under next image)
            previousImage.insertAdjacentElement("afterend", currentImage);
            enableButtons();
        }, 1500);
    }, 100);
}

function showImageName(imageElement){
    let name = imageElement.src;
    
    //remove folders
    name = name.substr(35);

    //remove spaces
    name = name.replace(/%20/g,' ');

    const imageDescription = document.getElementById("imageDescription");
    imageDescription.innerText = name;
}

function blockButtons(){
    //get buttons
    const nextButton = document.querySelector("main>section:nth-child(2)>a:nth-child(2)");
    const previousButton = document.querySelector("main>section:nth-child(2)>a:nth-child(1)");
    
    // remove anchor functions & set onclicks
    nextButton.onclick = function(){
        event.preventDefault();
    }

    previousButton.onclick = function(){
        event.preventDefault();
    } 
}

function enableButtons(){
    //get buttons
    const imgButton = document.querySelector("main>section:nth-child(3)>a");
    const nextButton = document.querySelector("main>section:nth-child(2)>a:nth-child(2)");
    const previousButton = document.querySelector("main>section:nth-child(2)>a:nth-child(1)");

    // remove anchor functions & set onclicks
    imgButton.onclick = function(){
        event.preventDefault();
        nextImage();
    }
    
    // remove anchor functions & set onclicks
    nextButton.onclick = function(){
        event.preventDefault();
        nextImage();
    }

    previousButton.onclick = function(){
        event.preventDefault();
        previousImage();
    } 
}

init();