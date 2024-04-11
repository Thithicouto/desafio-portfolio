
let formGeral = document.querySelector('.formcontato__form');

let inputNome = document.querySelector('#nome');
let inputEmail = document.querySelector('#email');
let inputAssunto = document.querySelector('#assunto');
let inputMensagem = document.querySelector('#mensagem');

validaBotao();

function validaBotao() {
    let campos = document.querySelectorAll('.formcontato__input, .formcontato__textarea');
    let botaoEnviar = document.querySelector('.formcontato__botao');

    let todosPreenchidos = true;

    campos.forEach(function(campo) {
        if (campo.value.trim() == '') {
            todosPreenchidos = false;
        }
    })

    if (todosPreenchidos) {
        botaoEnviar.removeAttribute('disabled');
    } else {
        botaoEnviar.setAttribute('disabled', 'disabled');
    }
}

[inputNome, inputEmail, inputAssunto, inputMensagem].forEach(function(input) { 
    input.addEventListener('input', function() {
        validaBotao();
    })
} )

formGeral.addEventListener('submit', function(event) {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaAssunto();
    validaMensagem();
    mensagemEnviada();
})

function validaNome() {
    let valorNome = inputNome.value.trim();

    if (valorNome == '') {
        alert('O campo nome não pode ficar vazio');
        inputNome.classList.add('error');
        return
    }

    if (valorNome.length > 50 ) {
        alert('O campo nome não pode ter mais de 50 caracteres');
        inputNome.classList.add('error');
        return
    }

    inputNome.classList.remove('error');


}

function validaEmail() {
    let valorEmail = inputEmail.value.trim();

    if (valorEmail == '') {
        alert('O campo do email não pode ficar vazio');
        inputEmail.classList.add('error');
        return
    }
    function isEmail(email) {
        let reg = /\S+@\S+\.\S+/;
        return reg.test(email)
    }

    if (!isEmail(valorEmail)) {
        alert('O campo de email precisa ser preenchido corretamente (exemplo: email@example.com)');
        inputEmail.classList.add('error');
        return
    }

    inputEmail.classList.remove('error');

}

function validaAssunto() {
    let valorAssunto = inputAssunto.value.trim();
    
    if (valorAssunto == '') {
        alert('O campo do assunto não pode ficar vazio');
        inputAssunto.classList.add('error');
        return
    }

    if (valorAssunto.length > 50) {
        alert('O campo assunto não pode ter mais de 50 caracteres');
        inputAssunto.classList.add('error');
        return
    }

    inputAssunto.classList.remove('error');
}


function validaMensagem() {
    let valorMensagem = inputMensagem.value.trim();

    if (valorMensagem == '') {
        alert('O campo da mansagem não pode estar vazio')
        inputMensagem.classList.add('error');
        return
    }

    if (valorMensagem.length > 300) {
        alert('O campo de mensagem deve conter no máximo 300 caracteres');
        inputMensagem.classList.add('error');
        return
    }

    inputMensagem.classList.remove('error');
}

function mensagemEnviada() {
    if (inputNome.classList.contains('error') || inputEmail.classList.contains('error') || inputAssunto.classList.contains('error') || inputMensagem.classList.contains('error')) {
        alert('Por favor, revise todos os campos antes de enviar')
    } else {
        alert('Mensagem enviada com sucesso!');
        inputNome.value = '';
        inputEmail.value = '';
        inputAssunto.value = '';
        inputMensagem.value = '';
    }
}