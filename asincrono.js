const names = ["Eduardo", "Peter", "John", "Bruce"]

console.log(names);

function getNames(){
    return names;
}

console.log(getNames());

function asynGetNames(){
    setTimeuot(() => {
        console.log('Ejecuta función');
        return names;
    }, 3000);
}

console.log('Inicia peticion');
console.log(asynGetNames());
console.log('Termina peticion');