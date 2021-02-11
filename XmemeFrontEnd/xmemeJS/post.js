
var form = document.getElementById('form')

form.onsubmit = (e)=>{

    e.preventDefault();

    var name = document.getElementById('name').value;
    var url = document.getElementById('url').value;
    var caption = document.getElementById('caption').value;

    const uri = "https://satyamxmeme.herokuapp.com/memes";

    const data = {
        name:name,
        url:url,
        caption:caption
    }

    postData(uri,data);

}

async function postData(uri,data) {
    
    const result = await postRequest(uri,data);
    location.reload();
}

async function postRequest(uri,data) {

        // fetch post request

    await fetch(uri,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json; charset=UTF-8",
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(datameme){
        console.log(datameme)
        //return data;
    })

}


  