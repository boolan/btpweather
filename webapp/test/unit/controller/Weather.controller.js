/*global QUnit*/

sap.ui.define([
	"btpweather/controller/Weather.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Weather Controller");

	QUnit.test("I should test the Weather controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
