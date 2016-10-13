(function() {
	'use strict';

	angular.module('myApp')
	.component('wrapperElement', {
		template: 
		`<div class="container">
    <button ui-sref="users">USER DATA</button><button ui-sref="mails">MAILBOX</button><br>
       <ui-view></ui-view>

</div>`
	
	})
})();