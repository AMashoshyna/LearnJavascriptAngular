(function() {
	'use strict';
	angular.module('MailBox')
	.component('newMail', {
		templateUrl: 'src/MailBox/newmail/newMail.html',
		controller: NewMailController,
		bindings: {
			addMail: '&',
			saveToDrafts:'&'
		}
	});

	NewMailController.$inject = ['MailBoxService','$q'];
	function NewMailController(MailBoxService, $q) {

		var ctrl = this;
		this.newMail = {
			mailbox: '580078b53727f3110444cc08',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com',
		};

		ctrl.addMailWrapper = function() {
			ctrl.addMail({mail: this.newMail});
			this.newMail = {
			subject: '',
			body: '',
			to: '',
		};

		};

		ctrl.saveDraft = function() {
			var draft = JSON.parse(JSON.stringify(this.newMail));
			// draft.mailbox = '580c8cc99de15a250410dbbf';
			ctrl.saveToDrafts({mail: draft});
		};

		
	}
})();