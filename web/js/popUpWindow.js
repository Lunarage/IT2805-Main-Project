function openWindow(data, identifisering = false){
    let container = document.getElementById('popUpContainer');
    container.style.zIndex = "1";
    container.style.visibility = "visible";

    let popUpWindow = document.getElementById('popUpWindow');
    popUpWindow.innerHTML = '';
    let title = document.createElement('h1');
    title.innerText = data.title;
    let closeButton = document.createElement('button');
    closeButton.setAttribute('onClick','closeWindow()');
    closeButton.innerText = 'Close Window'; //TODO: Replace with icon

    let picture = document.createElement('img');
    picture.setAttribute('src',data.picture);
    picture.setAttribute('alt',data.shortDesc);
    picture.setAttribute('id','picture');

    let desc = document.createElement('p');
    desc.innerText = data.longDesc;

    popUpWindow.appendChild(title);
    popUpWindow.appendChild(closeButton);
    popUpWindow.appendChild(picture);
    popUpWindow.appendChild(desc);
    resizePicture();
}

function closeWindow(){
    let container = document.getElementById('popUpContainer');
    container.style.zIndex = "-1";
    container.style.visibility = "hidden";
}

function resizePicture(){
    let popUpWindow = document.getElementById('popUpWindow');
    if(popUpWindow){
        let totalHeight = window.innerHeight;
        let padding = window.getComputedStyle(popUpWindow).padding;
        padding = padding.slice(0,-2);
        let elementsHeight = padding*2;
        let windowChildren = popUpWindow.children;
        let picture = document.getElementById('picture');
        for(let i = 0; i < windowChildren.length; i++){
            if(windowChildren[i] != picture){
                elementsHeight += windowChildren[i].offsetHeight;
            }
        }
        picture.style.maxHeight = (totalHeight - elementsHeight) + 'px';
    }
}

window.onresize = resizePicture;
