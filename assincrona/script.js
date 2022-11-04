let img = 1;
const max = 5;
const cb11 = document.getElementById("cb11");

function nextImg(img){
    fetch("img/" + img + ".png")
        .then(resp => resp.blob())
        .then(blob => {
            const imageObjectURL = URL.createObjectURL(blob);
            const proxImg = document.createElement("img");
            proxImg.src = imageObjectURL;
            cb11.appendChild(proxImg);
        });
}

window.onload = ()=>{
    for(let i=0; i<=3; i++){    
        nextImg( img++ % (max+1));
    }
}

cb11.onscroll = ()=>{
    nextImg( img++ % (max+1));
}
