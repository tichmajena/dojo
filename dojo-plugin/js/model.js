let model = {};



model.init = function(){
    model.updateLocalStore();
    model.getAudio();
    model.getImages();
    model.getSlideStorage();
};

/**
 * Audio Section
 */

 model.getAudio = function(){

    let audio = model.getLocalStore('dojo')[0].meta.audio;
    return audio;
 };

 model.getSlideStorage = function(){

    let storageArray = model.getLocalStore('dojo')[0].meta.storage;
    console.log(storageArray);
    return storageArray;
 };
 


 model.getImages = function(size){
    let galleryArray = model.getLocalStore('dojo')[0].gallery;
    console.log(galleryArray);
    return galleryArray;
 };

 model.getLocalStore = function(key){
    let store = JSON.parse(localStorage.getItem(key));
    return store;
 };

 model.updateLocalStore = function(){

    domLoad();
 };

model.removeLocalStorage = function(data){

};

