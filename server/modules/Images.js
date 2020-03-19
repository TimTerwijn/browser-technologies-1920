let lastID = 0;

const imagesArray = [
    "Koop is gevallen", 
    "De lift", 
    "Het hotel", 
]

module.exports = {
    getImageNameById(id){
        //check if id is to big
        if(id >= imagesArray.length){
            id = 0;
        }

        //set last id
        lastID = parseInt(id);
        
        return imagesArray[id];
    },

    getNextID(){
        return lastID + 1;
    }
};