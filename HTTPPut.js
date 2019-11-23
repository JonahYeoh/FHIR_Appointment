function HTTPPutData(urlStr, dataStr){
    console.table(dataStr);
    var rawFile = new XMLHttpRequest();
    rawFile.open("Put", urlStr, true);
    rawFile.setRequestHeader("Content-type", "application/json+fhir");

    rawFile.onreadystatechange = function(){
        if ( rawFile.readyState === 4 ){
            ret = rawFile.responseText;
            console.table(ret);
        }
    }
    rawFile.send(dataStr);
}