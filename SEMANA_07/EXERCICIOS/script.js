function cor(){
    var cores = ["red","blue","green","yellow"];
    var coresale = cores[Math.floor(Math.random() * cores.length)];
    $('#tabela').css({'background':coresale})
}

function linha(){
    var tabela = document.getElementById('tabela');
    var novalinha = document.createElement('tr');
    novalinha.innerHTML += '<tr><td>Inforção 2</td><td>Inforção 2</td><td>Inforção 2</td><td>Inforção 2</td></tr>'
    tabela.appendChild(novalinha);

}

