const URL = 'hrrp://127.0.0.1:5500/';

console.log('Peticion 1');
fetch('./datos.txt')
    .then(resp => resp.text())
    .then(texto => console.log(texto))
    .catch(error => comsole.log(error))

console.log('Peticion 2');
fetch('./datos.json')
    .then(resp => resp.text())
    .then(datos => console.log(datos))
    .catch(error => comsole.log(error))

    console.log('Sigue ejecutando');