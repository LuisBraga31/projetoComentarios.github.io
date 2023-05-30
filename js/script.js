const userName = document.querySelector('#inputName');
const userText = document.querySelector('#inputComent');
const comentarButton =  document.querySelector('#buttonSend');

const adicionar = document.querySelector('.comentarios');

const form = document.querySelector('.form-comentario');

var userComent = {
    userName: '',
    userText: ''
}

var errors = {
    inputName: true,
    inputComent: true
}


function verificarForm() {

    const errorsArray = Object.values(errors);
    const validacao = errorsArray.every(item => item === false);

    comentarButton.disabled = !validacao;

    if(comentarButton.disabled) {
        comentarButton.parentElement.classList.remove('ativado');
    } else {
        comentarButton.parentElement.classList.add('ativado');
    }

}

function validarInput(input) {

    const inputValidacao = input.checkValidity();
    const elementoPai = input.parentElement;

    if(inputValidacao) {
        elementoPai.classList.remove('error');
    } else {
        elementoPai.classList.add('error');
    }

    errors[input.id] = !inputValidacao;
    verificarForm();

}

function validateName(name) {
    userComent.userName = name;
}

function validateText(text) {
    userComent.userText = text;
}

function enviarComentario() {

    
    adicionar.innerHTML += `                
    <div class="coment">
        <p class="userName"> ${userComent.userName}: </p>
        <p class="userText">${userComent.userText} </p>
    </div>
    `;

    resetarForm();

}

function resetarForm(){
    userComent.userName = '';
    userComent.userText = '';
    form.reset();
    errors.inputName = true;
    errors.inputComent= true;
    comentarButton.disabled = true;
    comentarButton.parentElement.classList.remove('ativado');
}

userName.addEventListener('keyup', (event) => validateName(event.target.value));
userText.addEventListener('keyup', (event) => validateText(event.target.value));

userName.addEventListener('keyup', () => validarInput(userName));
userText.addEventListener('keyup', () => validarInput(userText));

comentarButton.addEventListener('click', () => enviarComentario());