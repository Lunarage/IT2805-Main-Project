function generatePictureGallery(data, identifisering = false){
    let gallery = document.createElement('div');
    gallery.setAttribute('class','pictureGallery');
    for(let i = 0; i < data.length; i++){
        let frame = document.createElement('div');
        frame.setAttribute('class','frame');

        let title = document.createElement('h2');
        title.innerText = data[i].title;

        let image = document.createElement('img');
        image.setAttribute('src',data[i].thumbnail);
        image.setAttribute('alt',data[i].shortDesc);

        let link = document.createElement('a');
        link.setAttribute('onClick','openWindow('+i+','+identifisering+')');
        link.appendChild(image);

        let desc = document.createElement('p');
        desc.innerText = data[i].shortDesc;

        frame.appendChild(title);
        frame.appendChild(link);
        frame.appendChild(desc);

        gallery.appendChild(frame);
    }
    return gallery;
}

//Oppdateres i
var clips = [];

function generateAudioGallery(data){
    let gallery = document.createElement('div');
    gallery.setAttribute('class','audioGallery');
    for(let i = 0; i < data.length; i++){
        let frame = document.createElement('div');
        frame.setAttribute('class','frame');

        let title = document.createElement('h2');
        title.innerText = data[i].title;

        let playButton = document.createElement('button');
        playButton.setAttribute('onClick','loadAudio('+i+',this)');
        playButton.setAttribute('class','playButton');

        let playDiv = document.createElement('div');
        playDiv.appendChild(playButton);

        let desc = document.createElement('p');
        desc.innerText = data[i].shortDesc;

        frame.appendChild(title);
        frame.appendChild(playDiv);
        frame.appendChild(desc);

        gallery.appendChild(frame);
    }
    return gallery;
}

function loadAudio(index,element){
        let player = document.createElement('audio');
        player.setAttribute('controls','')
        player.setAttribute('autoplay','')

        let source = document.createElement('source');
        source.setAttribute('src',clips[index].audio);
        source.setAttribute('type','audio/mpeg');
        player.appendChild(source);
        console.log(element.parentElement);

        element.parentElement.appendChild(player);
        element.parentElement.removeChild(element);
}
