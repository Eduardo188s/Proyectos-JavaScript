const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

function createAlert(message){
    /*
    <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
    </div>
    */
   const alerta=document.createElement('div');
   alerta.classList.add('alert');
   alerta.classList.add('alert-primary');
   alerta.setAttribute('role','alert');
   let buttons = '<div>';
   buttons += `<button class="btn red"></button>`;
   buttons += `<button class="btn yellow"></button>`;
   buttons += `<button class="btn green"></button>`;
   buttons += `<button class="btn x">X</button>`;
   buttons += `</div>`
   alerta.innerHTML = `<div>${message}</div>${buttons}`;
   return alerta;

}

function addTarea(){
    const data = inputTarea.value;
    const alerta = createAlert(data);
    inputTarea.value ='';
    tareas.appendChild(alerta);
}

function getButton(e){
    if(e.target.classList.contains('btn')){
        const action = e.target.classList[1];
        const alertaActual = e.target.parentElement.parentElement;
        switch(action){
            case 'red':
                alertaActual.classList = [];
                alertaActual.classList.add('alert', 'alert-danger');
                break;
            case 'yellow':
                alertaActual.classList = [];
                alertaActual.classList.add('alert', 'alert-warning');
                break;
            case 'green':
                alertaActual.classList = [];
                alertaActual.classList.add('alert', 'alert-success');
                break;
            case 'x':
                alertaActual.remove();
                break;
        }
    }
}

btnTarea.addEventListener('click', addTarea);
tareas.addEventListener('click', getButton);
