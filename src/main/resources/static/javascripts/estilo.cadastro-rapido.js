
$(function() {
	
	var modal = $('#modalCadastroRapidoEstilo');
	var botaoSalvar = modal.find('.js-modal-cadastro-estilo-salvar-btn');
	
	var form = modal.find('form');
	form.on('submit', (e) => { e.preventDefault();});
	
	var inputNomeEstilo = $('#nomeEstilo');
	var containerMensagemError = $('.js-mensagem-cadastro-rapido-estilo')
	var url = form.attr('action');
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