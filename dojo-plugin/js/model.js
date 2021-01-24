let model = {};

model.init = function(){
    model.updateLocalStore();
};

/**
 * Audio Section
 */

 model.getAudio = function(){

 };

 model.getImages = function(size){

 };

 model.getLocalStore = function(key){
let store = JSON.parse(localStorage.getItem(key));
return store;
 };

 model.updateLocalStore = async function(){

    domLoad();
 };

model.removeLocalStorage = function(data){

};

