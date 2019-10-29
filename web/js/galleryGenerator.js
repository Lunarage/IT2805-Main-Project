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

function generateAudioGallery(data,){
    let gallery = document.createElement('div');
    gallery.setAttribute('class','audioGallery');
    for(let i = 0; i < data.length; i++){
        let frame = document.createElement('div');
        frame.setAttribute('class','frame');

        let title = document.createElement('h2');
        title.innerText = data[i].title;

        //TODO: Do not auto load the audio element, but rather create a button that loads the requested audio + autoplay
        let player = document.createElement('audio');
        player.setAttribute('controls','')
        let source = document.createElement('source');
        source.setAttribute('src',data[i].audio);
        source.setAttribute('type','audio/mpeg');
        player.appendChild(source);

        let desc = document.createElement('p');
        desc.innerText = data[i].shortDesc;

        frame.appendChild(title);
        frame.appendChild(player);
        frame.appendChild(desc);

        gallery.appendChild(frame);
    }
    return gallery;
}
