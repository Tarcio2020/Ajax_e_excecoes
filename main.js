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
    $('#cep').mask('00000-000');
    
    $('#buscar').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        /* CHAMANDO A REQUISIÇÃO AJAX EM JQUERY
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
        */

        fetch(endpoint).then(function(respostas){
            return respostas.json();            
        }).then(function(json){
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);

         
        })


        .catch(function(erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
        })


        .finally(function() {
            setTimeout(function() {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
                
            },1000);
        })
    })


    $('#form-pedido').submit(function(e) {
        e.preventDefault();

        if ($('#nome').val().legth === 0) {
            throw new Error('Digite o Nome')
        }
    })
})




