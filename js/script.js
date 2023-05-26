const userName = document.querySelector('#inputName');
const userText = document.querySelector('#inputComent');
const comentarButton =  document.querySelector('#buttonSend');

const adicionar = document.querySelector('.comentarios');


var userComent = {
    userName: '',
    userText: ''
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

    limparCampos();

}

function limparCampos(){
    userComent.userName = '';
    userComent.userText = '';
    userName.value = '';
    userText.value = '';
}

userName.addEventListener('keyup', (event) => validateName(event.target.value));
userText.addEventListener('keyup', (event) => validateText(event.target.value));

comentarButton.addEventListener('click', () => enviarComentario());