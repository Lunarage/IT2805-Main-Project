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
