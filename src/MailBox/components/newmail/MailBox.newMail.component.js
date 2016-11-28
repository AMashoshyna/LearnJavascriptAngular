(function() {
	'use strict';
	angular.module('MailBox')
	.component('newMail', {
		templateUrl: 'src/MailBox/components/newmail/newMail.html',
		controller: NewMailController
	});

	NewMailController.$inject = ['MailBoxService','$q', '$stateParams'];
	function NewMailController(MailBoxService, $q, $stateParams) {
		var ctrl = this;
		ctrl.addMailWrapper = addMailWrapper;
		ctrl.saveDraft = saveDraft;
		if($stateParams.useremail) {
			ctrl.newMail = {
				mailbox: '580c94289de15a250410dbc0',
				subject: '',
				body: '',
				to: $stateParams.useremail,
			};
		} else {
			ctrl.newMail = {
				mailbox: '580c94289de15a250410dbc0',
				subject: 'test',
				body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
				to: 'test@test.com',
			};
		};

		function addMailWrapper() {
			MailBoxService.newMail(this.newMail);
			this.newMail = {
				subject: '',
				body: '',
				to: ''
			};
		};

		function saveDraft() {
			var draft = JSON.parse(JSON.stringify(this.newMail));
			MailBoxService.saveToDrafts(draft);
		};
	}
})();