function getGETvalues(){
    //Returns an object with GET values
    //e.g. arkivet/index.html?lang=en&type=1
    //returns {lang:en,type:1}
    var parameters = location.search.substr(1).split("&");
    var ret = {};
    for(var i = 0; i < parameters.length; i++){
        var tmp = parameters[i].split("=");
        ret[tmp[0]] = tmp[1];
    }
    return ret;
}

function getData(path){
    //New request object
    let request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        //readyState 0 = unsent
        //readyState 1 = opened, insert loading animation here?
        //readyState 2 = sent
        //readyState 3 = loading
        //readyState 4 = response ready
        if(this.readyState == 4){
            //Convert text response to JSON object
            data = JSON.parse(this.response);

            //Call the page specific render function
            //This function must be locally defined for every page
            renderPage();
        }
    };

    //Open and send the request
    request.open('GET',path);
    request.send();
}
