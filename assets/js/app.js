let buttonAdd = document.getElementById('add');
let buttonModificar = document.getElementById('modificar');
let buttonRemover = document.getElementById('remover');
let buttonRemoverTudo = document.getElementById('removerTudo');

buttonAdd.addEventListener('click', function(e) {
    e.preventDefault()
    var item = document.forms.criarLista.item.value;
	var quantidade = document.forms.criarLista.quantidade.value;
	sessionStorage.setItem(item, quantidade);
	mostrarTudo();
});

buttonModificar.addEventListener('click', function(e) {
    e.preventDefault()
    var item = document.forms.criarLista.item.value;
	document.forms.criarLista.quantidade.value = sessionStorage.getItem(item);
	mostrarTudo();
});

buttonRemover.addEventListener('click', function(e) {
    e.preventDefault()
    var item = document.forms.criarLista.item.value;
	document.forms.criarLista.quantidade.value = sessionStorage.removeItem(item);
	mostrarTudo();
});

buttonRemoverTudo.addEventListener('click', function(e) {
    e.preventDefault()
    sessionStorage.clear();
	mostrarTudo();
});

function mostrarTudo() {
    var chave = '';
    var lista = '';
    var i = 0;
	for (i = 0; i <= sessionStorage.length - 1; i++) {
		chave = sessionStorage.key(i);
        lista += "<li>" + chave + " " + sessionStorage.getItem(chave) + "</li>";
	}
	document.getElementById('lista').innerHTML = lista;
}