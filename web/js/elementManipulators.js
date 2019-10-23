//This will not work on IE < 10
function addClass(elementId, classString){
    let element = document.getElementById(elementId);
    if(! element.classList.contains(classString)){element.classList.add(classString);}
}

//This will not work on IE < 10
function removeClass(elementId, classString){
    let element = document.getElementById(elementId);
    if(element.classList.contains(classString)){element.classList.remove(classString);}
}

//This will not work on IE < 10
function toggleClass(elementId, classString){
    let element = document.getElementById(elementId);
    if(element.classList.contains(classString)){
        removeClass(elementId, classString);
    }else{
        addClass(elementId, classString);
    }
}

function getHeader(page){
    //New request object
    let request = new XMLHttpRequest();
    //Where we want to put new elements
    let content = document.getElementById('header');

    //What happens when the request changes state a.k.a what we do when we get the response
    request.onreadystatechange = function(){
        //readyState 4 = response ready
        if(this.readyState == 4){
            //clear the previous content
            content.innerHTML = "";
            content.innerHTML = this.response;
            let navLink = document.getElementById(page);
            addClass(page,'selected');
        }
    }
    request.open('GET','modules/header.html',true);
    request.send();
}

function getFooter(){
    //New request object
    let request = new XMLHttpRequest();
    //Where we want to put new elements
    let content = document.getElementById('footer');

    //What happens when the request changes state a.k.a what we do when we get the response
    request.onreadystatechange = function(){
        //readyState 4 = response ready
        if(this.readyState == 4){
            //clear the previous content
            content.innerHTML = "";
            content.innerHTML = this.response;
        }
    }
    request.open('GET','modules/footer.html',true);
    request.send();
}

function setCurrentNav(page){
}
