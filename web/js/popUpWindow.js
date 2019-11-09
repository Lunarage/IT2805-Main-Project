//Updated in identifisering.html and arkiv.html
var pictures = [];
//Global variable to keep track of current open picture
//Changes when openWindow is called
var globalIndex = null;
//Is this identifisering?
var identifisering = false;

function keyPressPicture(event){
    if(event.key == 'ArrowLeft'){
        prevPicture(identifisering);
    }else if(event.key == 'ArrowRight'){
        nextPicture(identifisering);
    }else if(event.key == 'Escape'){
        closeWindow();
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
            prevPicture(identifisering);
        }else if(diffX < -10){
        //Left Swipe
            nextPicture(identifisering);
        }
    }

    //Reset variables
    touchX = null;
    touchY = null;
}

function nextPicture(identifisering = false){
    openWindow(globalIndex+1, identifisering);
}

function prevPicture(identifisering = false){
    openWindow(globalIndex-1, identifisering);
}

function openWindow(index, identifisering = false){
    if(index >= 0 && index < pictures.length){
        //Update global variable to keep track of current open picture
        globalIndex = index;
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
        picture.setAttribute('onLoad', 'resizePicture()');

        let leftButton = document.createElement('button');
        leftButton.setAttribute('class','leftArrow');
        leftButton.setAttribute('onClick','prevPicture('+identifisering+')');
        let rightButton = document.createElement('button');
        rightButton.setAttribute('class','rightArrow');
        rightButton.setAttribute('onClick','nextPicture('+identifisering+')');

        let desc = document.createElement('p');
        desc.innerText = pictureData.longDesc;

        popUpWindow.appendChild(title);
        popUpWindow.appendChild(leftButton);
        popUpWindow.appendChild(picture);
        popUpWindow.appendChild(rightButton);
        popUpWindow.appendChild(desc);

        if(identifisering){
            let mailPara = document.createElement('p');
            let mailLink = document.createElement('a');
            mailLink.setAttribute('href','mailto:arkivet@samfundet.no?Subject=['+pictureData.title+']');
            mailLink.setAttribute('target','_blank');
            if(GET.lang == 'no'){
                mailPara.innerText = "Hvis du vet noe om dette bildet, ";
                mailLink.innerText = "send oss en e-post";
            }else if(GET.lang == 'en'){
                mailPara.innerText = "If you know anything about this picture, ";
                mailLink.innerText = "send us an e-mail";
            }
            mailPara.appendChild(mailLink);
            popUpWindow.appendChild(mailPara);
        }

        resizePicture();
        // Enable touch and button interaction
        document.addEventListener('keydown',keyPressPicture);
        document.addEventListener('touchstart',touchStart);
        document.addEventListener('touchend',touchEnd);
        // Disable default scrolling behaviour
        disableScroll();
    }
}

function closeWindow(){
    let container = document.getElementById('popUpContainer');
    container.style.zIndex = "-1";
    container.style.visibility = "hidden";
    // Disable touch and button interaction
    document.removeEventListener('keydown',keyPressPicture);
    document.removeEventListener('touchstart',touchStart);
    document.removeEventListener('touchend',touchEnd);
    // Reenable default scrolling behaviour
    enableScroll();
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

function preventDefault(event){
    event.preventDefault();
}

function disableScroll(){
    window.addEventListener('wheel', preventDefault, {passive: false});
    window.onWheel = preventDefault;
    window.onTouchMove = preventDefault;
}

function enableScroll(){
    window.removeEventListener('wheel', preventDefault, {passive: false});
    window.onWheel = null;
    window.onTouchMove = null;
}

window.onresize = resizePicture;
