sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

        createWeatherModel: function () {
            var oModel = new JSONModel({
                items: [{
                    date: "2021.11.22",
                    temp: "13",
                    units: "C",
                    humidity: "50"
                }]
            });

            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        }

	};
});