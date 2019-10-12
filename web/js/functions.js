function getGETvalues(){
    var parameters = location.search.substr(1).split("&");
    var ret = {};
    for(var i = 0; i < parameters.length; i++){
        var tmp = parameters[i].split("=");
        ret[tmp[0]] = tmp[1];
    }
    return ret;
}
