/*var Brewer = Brewer || {};

Brewer.MaskMoney = (function() {
	
	function MaskMoney() {
		this.decimal = $('.js-decimal');
		this.plain = $('.js-plain');
	}
	
	MaskMoney.prototype.enable = function() {
		this.decimal.maskMoney({ decimal: ',', thousands: '.' });
		this.plain.maskMoney({ precision: 0, thousands: '.' });
	}
	
	return MaskMoney;
	
	//var maskMoney = new Brewer.MaskMoney();
	//maskMoney.enable();
	
}());*/

$(function() {
	
	var decimal = $('.js-decimal');
	var plain = $('.js-plain');
	
	decimal.maskMoney({ decimal: ',', thousands: '.' });
	plain.maskMoney({ precision: 0, thousands: '.' });
});