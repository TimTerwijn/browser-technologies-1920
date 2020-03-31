
function init(){
    //fix all the buttons
    buttonSetup();
};

function buttonSetup(){
    //get buttons
    const nextButton = document.querySelector("main>section:nth-child(2)>a:nth-child(2)");
    const previousButton = document.querySelector("main>section:nth-child(2)>a:nth-child(1)");
    
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

function nextImage(){
    //move first image to the back
    const parent = document.querySelector("main>section:nth-child(3)>a");
    const child = parent.firstElementChild;
    parent.append(child);
}

function previousImage(){
     //move last image to the front
    const parent = document.querySelector("main>section:nth-child(3)>a");
    const child = parent.lastElementChild;
    parent.prepend(child); 
}

init();