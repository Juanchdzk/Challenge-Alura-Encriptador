const inputEncriptado = document.querySelector("#textoEncriptado");

const outputDesencriptado = document.querySelector("#textoDesencriptado");

const matrizVocales = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"], ["u","ufat"]];

/* 
Botones
*/

function btnEncriptar(){
    const textoEncriptado = encriptarTexto(inputEncriptado.value);
    outputDesencriptado.value = textoEncriptado;
    inputEncriptado.value = "";
}


function btnDesencriptar(){
    const textoEncriptado = desencriptarTexto(inputEncriptado.value);
    outputDesencriptado.value = textoEncriptado;
    inputEncriptado.value = "";
}


function btnCopiar(){
    outputDesencriptado.select();
    navigator.clipboard.writeText(outputDesencriptado.value);
    outputDesencriptado.value = "";
}

/*
Encriptador y desencriptador
*/ 

function encriptarTexto(textoEncriptado){
    if(textoEncriptado.length != 0){
        textoEncriptado = textoEncriptado.toLowerCase();

        for(var i = 0; i < matrizVocales.length; i++){
            if (textoEncriptado.includes(matrizVocales[i][0])){
                textoEncriptado = textoEncriptado.replaceAll(matrizVocales[i][0],matrizVocales[i][1]);
            }
        }
            return textoEncriptado;
    } else {
        alert("No hay mensaje que encriptar");
        console.log(inputEncriptado[0].value);
    }
}

function desencriptarTexto(textoDesencriptado){
    if(textoDesencriptado.length != 0){
        textoDesencriptado = textoDesencriptado.toLowerCase();

        for(var i = 0; i < matrizVocales.length; i++){
            if (textoDesencriptado.includes(matrizVocales[i][1])){
                textoDesencriptado = textoDesencriptado.replaceAll(matrizVocales[i][1],matrizVocales[i][0]);
            }
        }
        return textoDesencriptado;
    } else {
        alert("No hay mensaje que desencriptar");
        console.log(outputDesencriptado[0].value);
    }
}