const initiatePromise = async function(){
    var response = await fetch("https://rest.bandsintown.com/artists/Maroon%205?app_id=510");
    var data = await response.json();
    displayPicture(data);
    //console.log(data);
}

initiatePromise();

function displayPicture(data){
    let h1 = document.createElement("h1");
    h1.innerText=data.name;
    let h3 = document.createElement("h2");
    h3.innerText = data.facebook_page_url;
    let h2 = document.createElement("h2");
    h2.innerText = "The facebook url is given below";
    let btn = document.getElementsByTagName("button");
    btn[0].addEventListener("click",(e)=>{
        let img = document.createElement("img");
        //console.log(data);
        img.src=data.image_url;
        let div = document.getElementsByClassName("row");
        div[0].append(h1,h2,h3,img);
    })
}