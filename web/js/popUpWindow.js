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

    let pictureBox = document.createElement('div');
    pictureBox.setAttribute('class','pictureBox');
    let picture = document.createElement('img');
    picture.setAttribute('src',data.picture);
    picture.setAttribute('alt',data.shortDesc);
    pictureBox.appendChild(picture);

    let desc = document.createElement('p');
    desc.innerText = data.longDesc;

    popUpWindow.appendChild(title);
    popUpWindow.appendChild(closeButton);
    popUpWindow.appendChild(pictureBox);
    popUpWindow.appendChild(desc);
}

function closeWindow(){
    let container = document.getElementById('popUpContainer');
    container.style.zIndex = "-1";
    container.style.visibility = "hidden";
}
