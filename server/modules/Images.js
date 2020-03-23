const fs = require('fs');

//inspired by https://stackoverflow.com/a/2727191
const folder = '../client/static/img/';
const imagesArray = fs.readdirSync(folder)

let lastID = 0;

module.exports = {
    getImageNameById(id){
        //check if id is to big
        if(id >= imagesArray.length){
            id = 0;
        }
        //check if id is to small
        if(id < 0){
            id = imagesArray.length -1;
        }

        //set last id
        lastID = parseInt(id);
        
        return imagesArray[id];
    },

    getLastId(){
        return lastID - 1;
    },

    getNextId(){
        return lastID + 1;
    }
};