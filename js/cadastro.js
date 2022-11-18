const preencherFormulario = (endereco) =>{
  document.getElementById('endc').value = endereco.logradouro + ', ' + endereco.bairro;

  document.getElementById('cityc').value = endereco.localidade + ', ' + endereco.uf;
}

const cepValido = (cep) => cep.length == 8;

const pesquisarCep = async() => {
  const cep = document.getElementById('cepc').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  
  if(cepValido(cep)){
    const dados = await fetch(url);
    const endereco = await dados.json();


    if (endereco.hasOwnProperty('erro')){
      document.getElementById('error').innerHTML = 'CEP inválido';
      document.getElementById('cepc').classList.add('error');
      document.getElementById('cepcc').classList.add('error');

      document.getElementById('endc').value = '';
      document.getElementById('cityc').value = '';

    }else{
      preencherFormulario(endereco);
      document.getElementById('error').innerHTML = '';
      document.getElementById('cepc').classList.remove('error'); 
    }
    

  }else{
    document.getElementById('error');

  }

  
}

document.getElementById('cepc')
        .addEventListener('focusout',pesquisarCep);

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email-cadastro');
const telefone = document.getElementById('telefone');
const cep = document.getElementById('cepc');
const endereco = document.getElementById('endc');
const estado = document.getElementById('cityc');
const numerocasa = document.getElementById('numberhome');
const complemento = document.getElementById('complementoc');
const password = document.getElementById('pass-cadastro');
const passwordtwo = document.getElementById('pass-confirm-cadastro');

form.addEventListener('submit', (e) => {
  e.preventDefault() 

  checkInputs()
})

function checkInputs(){
  const usarnameValue = username.value.trim()
  const emailValue = email.value.trim()
  const telefoneValue = telefone.value.trim()
  const cepValue = cep.value.trim()
  const endValue = endereco.value.trim()
  const estadoValue = estado.value.trim()
  const numeroCasaValue = numerocasa.value.trim()
  const complementoValue = complemento.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = password.value.trim()

  if(usarnameValue === ''){

    errorValidation(username, 'Campo obrigatório')

  }else {

  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;

  formControl.className
}