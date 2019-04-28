function CambioFotoAstrnauta() {
    document.getElementById('astronauta').style = "width:50%;";
}

function CambioFotoExtraterrestre() {
    document.getElementById('extraterrestre').style = "-webkit-filter:blur(5px);filter:blur(5px);";
}

function CambioFotoPlanetas() {
    document.getElementById('planetas').style = "filter:hue-rotate(90deg);-webkit-filter:hue-rotate(90deg);";
}


function CambioFotoNave() {
    document.getElementById('nave_espacial').style = "filter:sephia(100%);-webkit-filter:sephia(100%);";
}


//document.getElementById('astronauta').onclick = CambioFotoAstrnauta
//document.getElementById('extraterrestre').ondblclick = CambioFotoExtraterrestre
//document.getElementById('planetas').onmouseover = CambioFotoPlanetas
//document.getElementById('nave_espacial').onmouseout = CambioFotoNave