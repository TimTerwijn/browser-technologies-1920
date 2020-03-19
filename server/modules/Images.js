const imagesArray = [
    "Koop is gevallen", 
    "De lift", 
    "Het hotel", 
]

module.exports = {
    getImageNameById(id){
        return imagesArray[id];
    }
};