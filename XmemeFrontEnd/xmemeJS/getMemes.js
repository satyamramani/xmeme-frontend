import {updateMemeRequest} from './updateMemes.js';

export function getAllMemes() {

  //clickbutton()

  var galleryDiv = document.querySelector('.gallery')
  var url = "https://satyamxmeme.herokuapp.com/memes";

  fetchAPI(galleryDiv,url);
  
}

async function fetchAPI(gallerydiv,url) {


  await fetch(url,{
    method:'GET',
    headers:{
      Accept:'application/json'
    }
  })
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    createHtmlElements(gallerydiv,data);       
  })

}

function createHtmlElements(galleryDiv,memes) {
  memes.forEach(meme => {
  const item = document.createElement('div');
    item.classList.add('item');
      item.innerHTML= `
          <h2>${meme.name}</h2>
          <a href = '#' myid="${meme.id}" id="image">
            <img src="${meme.url}">
            <h3>${meme.caption}</h3>
          </a>
          `;
  const buttonitem = document.createElement('div');
    buttonitem.classList.add('buttonitem');
      buttonitem.innerHTML= `
        <button type="button"  mid="${meme.id}">EDIT</button>  
          `;
    buttonitem.addEventListener('click', function(){
        document.querySelector('.bg').style.display='flex';;
        updateMemeRequest(meme.id);
    });
    galleryDiv.appendChild(item);
    galleryDiv.appendChild(buttonitem);
  })

}


