export function updateMemeRequest(id) {
    
    var form2 = document.getElementById('form2');

    form2.onsubmit = (e)=>{

        e.preventDefault();

        var memeId = id;

        var url = document.getElementById('url2').value;
        var caption = document.getElementById('caption2').value;

        updateMeme(url,caption,memeId)

    }
}

function updateMeme(url,caption,id) {


    const uri = "https://satyamxmeme.herokuapp.com/memes/"+id;

    const data = {
        url:url,
        caption:caption
    }

    updateRequest(uri,data);

    document.querySelector('.bg').style.display='none';
    //getAllMemes();
}


async function updateRequest(uri,data) {

        // fetch post request

    await fetch(uri,{
        method:'PATCH',
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json; charset=UTF-8",
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(location.reload());

}


  