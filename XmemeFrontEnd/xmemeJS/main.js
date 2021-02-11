import {getAllMemes} from './getMemes.js';

getAllMemes();

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg').style.display='none';
})