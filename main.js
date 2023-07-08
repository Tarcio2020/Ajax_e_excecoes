/*
//Com JS puro!!!
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buscar').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();

        const cep = document.getElementById('cep').value;
        const endpoint = `https://viacep.com.br/ws/${cep}/json`

        xhttp.open('GET', endpoint);
        xhttp.send();

        //Endereço que iremos chamar para o CEP: https://viacep.com.br/ws/2156151561/json
    })
})

*/

//Com Jquery
$(document).ready(function() {
    
    $('#buscar').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');


        $.ajax(endpoint).done(function(respostas) {
            const logradouro = respostas.logradouro;
            const bairro = respostas.bairro;
            const cidade = respostas.localidade;
            const estado = respostas.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

            $('#endereco').val(endereco);

        setTimeout(function() {
            $(botao).find('i').removeClass('d-none');
            $(botao).find('span').addClass('d-none');
            
        },2500);
        })
    })
})




