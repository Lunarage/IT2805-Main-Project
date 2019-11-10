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
        //readyState 0 = unsent
        //readyState 1 = opened, insert loading animation here?
        //readyState 2 = sent
        //readyState 3 = loading
        //readyState 4 = response ready
        if(this.readyState == 4){
            //clear the previous content
            content.innerHTML = "";
            content.innerHTML = this.response;
            let navLink = document.getElementById(page);
            addClass(page,'selected');

            let navIndex = document.getElementById('navIndex');
            let navArkiv = document.getElementById('navArkiv');
            let navIdentifisering = document.getElementById('navIdentifisering');
            let navHjelpOss = document.getElementById('navHjelpOss');
            let navDaljer = document.getElementById('navDaljer');
            let navKontakt = document.getElementById('navKontakt');
            let langButton = document.getElementById('langButton');
            let menuButton = document.getElementById('menuButton');
            if(GET.lang == 'no'){
                //Set HTML attribute lang to approriate language
                document.documentElement.setAttribute('lang','no');
                addClass(langButton.id, 'en')
                langButton.setAttribute('href','?lang=en');
                langButton.innerText = 'English';
                menuButton.innerText = 'Meny';
                navIndex.setAttribute('href',navIndex.getAttribute('href')+'?lang=no');
                navIndex.innerText='Forside';
                navArkiv.setAttribute('href',navArkiv.getAttribute('href')+'?lang=no');
                navArkiv.innerText='Arkiv';
                navIdentifisering.setAttribute('href',navIdentifisering.getAttribute('href')+'?lang=no');
                navIdentifisering.innerText='Identifisering';
                navHjelpOss.setAttribute('href',navHjelpOss.getAttribute('href')+'?lang=no');
                navHjelpOss.innerText='Hjelp Oss';
                navDaljer.setAttribute('href',navDaljer.getAttribute('href')+'?lang=no');
                navDaljer.innerText='Daljer';
                navKontakt.setAttribute('href',navKontakt.getAttribute('href')+'?lang=no');
                navKontakt.innerText='Kontakt';
            }else if(GET.lang == 'en'){
                //Set HTML attribute lang to approriate language
                document.documentElement.setAttribute('lang','en');
                addClass(langButton.id, 'no')
                langButton.setAttribute('href','?lang=no');
                langButton.innerText = 'Norsk';
                menuButton.innerText = 'Menu';
                navIndex.setAttribute('href',navIndex.getAttribute('href')+'?lang=en');
                navIndex.innerText='Home';
                navArkiv.setAttribute('href',navArkiv.getAttribute('href')+'?lang=en');
                navArkiv.innerText='Archive';
                navIdentifisering.setAttribute('href',navIdentifisering.getAttribute('href')+'?lang=en');
                navIdentifisering.innerText='Identification';
                navHjelpOss.setAttribute('href',navHjelpOss.getAttribute('href')+'?lang=en');
                navHjelpOss.innerText='Help Us';
                navDaljer.setAttribute('href',navDaljer.getAttribute('href')+'?lang=en');
                navDaljer.innerText='Medals';
                navKontakt.setAttribute('href',navKontakt.getAttribute('href')+'?lang=en');
                navKontakt.innerText='Contact';
            }
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

            let footerKontakt = document.getElementById('footerKontakt');
            if(GET.lang == 'no'){
                footerKontakt.setAttribute('href', footerKontakt.getAttribute('href') + '?lang=no');
            }else if(GET.lang == 'en'){
                footerKontakt.setAttribute('href', footerKontakt.getAttribute('href') + '?lang=en');
            }
        }
    }
    request.open('GET','modules/footer.html',true);
    request.send();
}

function toggleMenu(){
    toggleClass('mainMenu','hidden');
}
