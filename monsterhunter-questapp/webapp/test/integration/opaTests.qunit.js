/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ibsolution/monster/monsterhunter-questapp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});