/*
var Brewer = Brewer | {};

Brewer.EstiloCadastroRapido = (function() {
	
	function EstiloCadastroRapido() {
		this.modal = $('#modalCadastroRapidoEstilo');
		this.botaoSalvar = modal.find('.js-modal-cadastro-estilo-salvar-btn');
		this.form = this.modal.find('form');
		this.inputNomeEstilo = $('#nomeEstilo');
		this.containerMensagemError = $('.js-mensagem-cadastro-rapido-estilo')
		this.url = this.form.attr('action');
		
	}
	
	EstiloCadastroRapido.prototype.iniciar = function() {
		this.form.on('submit', (e) => { e.preventDefault();});
		this.modal.on('shown.bs.modal', onModalShow.bind(this));
		this.modal.on('hide.bs.modal', onModalClose.bind(this));
		this.botaoSalvar.on('click', onBotaoSalvarClick.bind(this));
	}
	
	function onModalShow() {
		this.inputNomeEstilo.focus();
	}
	
	function onModalClose() {
		this.inputNomeEstilo.val('');
		this.containerMensagemError.addClass('hidden');
		this.form.find('.form-group').removeClass('has-error');
	}
	
	function onBotaoSalvarClick() {
		var nomeEstilo = this.inputNomeEstilo.val().trim();
		$.ajax({
			url: this.url,
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({'nome': nomeEstilo}),
			error: onErrorSalvandoEstilo.bind(this),
			success: onEstiloSalvo.bind(this),
			
		})
	}
	
	function onErrorSalvandoEstilo(obj) {
		var mensagemError = obj.responseText;
		this.containerMensagemError.removeClass('hidden');
		this.containerMensagemError.html('<span>' + mensagemError + '</span>');
		this.form.find('.form-group').addClass('has-error');
	}
	
	function onEstiloSalvo(obj) {
		var comboEstilo = $('#estilo');
		comboEstilo.append('<option value=' + obj.codigo + '>' + obj.nome + '</option>');
		comboEstilo.val(obj.codigo);
		this.modal.modal('hide');
	}
	
	//var estiloCadastroRapido = new Brewer.EstiloCadastroRapido();
	//estiloCadastroRapido.iniciar();
	
	return EstiloCadastroRapido;
}());
*/
$(function() {
	
	var modal = $('#modalCadastroRapidoEstilo');
	var botaoSalvar = modal.find('.js-modal-cadastro-estilo-salvar-btn');
	var form = modal.find('form');
	var inputNomeEstilo = $('#nomeEstilo');
	var containerMensagemError = $('.js-mensagem-cadastro-rapido-estilo')
	var url = form.attr('action');
	
	form.on('submit', (e) => { e.preventDefault();});
	modal.on('shown.bs.modal', onModalShow);
	modal.on('hide.bs.modal', onModalClose);
	botaoSalvar.on('click', onBotaoSalvarClick);
	
	function onModalShow() {
		inputNomeEstilo.focus();
	}
	
	function onModalClose() {
		inputNomeEstilo.val('');
		containerMensagemError.addClass('hidden');
		form.find('.form-group').removeClass('has-error');
	}
	
	function onBotaoSalvarClick() {
		var nomeEstilo = inputNomeEstilo.val().trim();
		$.ajax({
			url: url,
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({'nome': nomeEstilo}),
			error: onErrorSalvandoEstilo,
			success: onEstiloSalvo,
			
		})
	}
	
	function onErrorSalvandoEstilo(obj) {
		var mensagemError = obj.responseText;
		containerMensagemError.removeClass('hidden');
		containerMensagemError.html('<span>' + mensagemError + '</span>');
		form.find('.form-group').addClass('has-error');
	}
	
	function onEstiloSalvo(obj) {
		var comboEstilo = $('#estilo');
		comboEstilo.append('<option value=' + obj.codigo + '>' + obj.nome + '</option>');
		comboEstilo.val(obj.codigo);
		modal.modal('hide');
	}
	
});