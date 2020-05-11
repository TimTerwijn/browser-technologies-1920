//check if on mobile
const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

if(isMobile){
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    //remove link to image
    const link = document.querySelector("main>section:nth-child(3)>a");
    link.pointerEvents = "none";
}else{// is a web browser or 
    //remove hidden class from buttons
    const menu = document.querySelector("main>section:nth-child(2)");
    menu.classList.remove("hidden");
}


let xDown = null;                                                        
let yDown = null;

function getTouches(evt) {
  return evt.touches;
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    const xUp = evt.touches[0].clientX;                                    
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            previousImage();
        } else {
            /* right swipe */
            nextImage();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};