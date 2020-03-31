const fs = require('fs');

//inspired by https://stackoverflow.com/a/2727191
const folder = '../client/static/img/uploaded/';
let lastID = 0; //todo: all users have the same id, fix it by sending the user current id

module.exports = {
    getAllImages(){
        return fs.readdirSync(folder);
    },

    getImageNameById(id){
        const imagesArray = fs.readdirSync(folder)

        //check if id is to big
        if(id >= imagesArray.length){
            //todo: id cant be 0 in url for some reson???
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