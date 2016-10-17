(function() {
	'use strict';

	angular.module('myApp')
	.component('wrapperElement', {
		template: 
		`<div class="container">
	   <ul class="nav nav-pills">
       <li><a ui-sref="users" ng-class="{active: $state.includes('users')}">CONTACTS</a></li>
       <li><a ui-sref="mails.inbox" ng-class="{active: $state.includes('mails')}">MAILBOX</a></li>
	   </ul>    
       <ui-view></ui-view>
       </div>`
	
	})
})();