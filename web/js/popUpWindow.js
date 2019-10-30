//Updated in identifisering.html and arkiv.html
var pictures = [];
//Global variable to keep track of current open picture
//Changes when openWindow is called
var globalIndex = null;

function keyPressPicture(event){
    if(event.key == 'ArrowLeft'){
        prevPicture();
    }else if(event.key == 'ArrowRight'){
        nextPicture();
    }
}

var touchX = null;
var touchY = null;

function touchStart(event){
    touchX = event.touches[0].clientX;
    touchY = event.touches[0].clientY;
}

function touchEnd(event){
    let diffX = event.changedTouches[0].clientX - touchX;
    let diffY = event.changedTouches[0].clientY - touchY;

    //Horizontal movement most significant?
    if(Math.abs(diffX) > Math.abs(diffY)){
        if(diffX > 10){
        //Right Swipe
            prevPicture();
        }else if(diffX < -10){
        //Left Swipe
            nextPicture();
        }
    }

    //Reset variables
    touchX = null;
    touchY = null;
}

function nextPicture(){
    openWindow(globalIndex+1);
}

function prevPicture(){
    openWindow(globalIndex-1);
}

function openWindow(index, identifisering = false){
    if(index >= 0 && index < pictures.length){
        //Update global variable to keep track of current open picture
        globalIndex = index;
        console.log(globalIndex);
        let pictureData = pictures[index];

        let container = document.getElementById('popUpContainer');
        container.style.zIndex = "1";
        container.style.visibility = "visible";

        let popUpWindow = document.getElementById('popUpWindow');
        popUpWindow.innerHTML = '';

        let closeButton = document.createElement('button');
        closeButton.setAttribute('onClick','closeWindow()');

        let title = document.createElement('h1');
        title.innerText = pictureData.title;
        title.appendChild(closeButton);

        let picture = document.createElement('img');
        picture.setAttribute('src',pictureData.picture);
        picture.setAttribute('alt',pictureData.shortDesc);
        picture.setAttribute('id','picture');

        let leftButton = document.createElement('button');
        leftButton.setAttribute('class','leftArrow');
        leftButton.setAttribute('onClick','prevPicture()');
        let rightButton = document.createElement('button');
        rightButton.setAttribute('class','rightArrow');
        rightButton.setAttribute('onClick','nextPicture()');

        let desc = document.createElement('p');
        desc.innerText = pictureData.longDesc;

        popUpWindow.appendChild(title);
        popUpWindow.appendChild(leftButton);
        popUpWindow.appendChild(picture);
        popUpWindow.appendChild(rightButton);
        popUpWindow.appendChild(desc);

        document.addEventListener('keydown',keyPressPicture);
        document.addEventListener('touchstart',touchStart);
        document.addEventListener('touchend',touchEnd);
        resizePicture();
    }
}

function closeWindow(){
    let container = document.getElementById('popUpContainer');
    container.style.zIndex = "-1";
    container.style.visibility = "hidden";
    document.removeEventListener('keydown',keyPressPicture);
    document.removeEventListener('touchstart',touchStart);
    document.removeEventListener('touchend',touchEnd);
}

function resizePicture(){
    let popUpWindow = document.getElementById('popUpWindow');
    if(popUpWindow){
        let picture = document.getElementById('picture');
        if(picture){
            let totalHeight = window.innerHeight;
            let padding = window.getComputedStyle(popUpWindow).padding;
            padding = padding.slice(0,-2);
            let elementsHeight = padding*2;
            let windowChildren = popUpWindow.children;
            for(let i = 0; i < windowChildren.length; i++){
                if(windowChildren[i].nodeName == 'H1' || windowChildren[i].nodeName == 'P'){
                    elementsHeight += windowChildren[i].offsetHeight;
                }
            }
            picture.style.maxHeight = (totalHeight - elementsHeight) + 'px';
        }
    }
}

window.onresize = resizePicture;

