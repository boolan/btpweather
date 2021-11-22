sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("btpweather.controller.Weather", {
            onInit: function () {
                var oModel = this.getView().getModel("weather");
                this.getView().setModel(oModel);
            },

            _mapResults: function (results) {
                var aForecastResults = [];
                if (results && results.list && results.list.length) {
                    for (var i = 0; i < results.list.length; i++) {
                        var oTemp = results.list[i].temp;

                        aForecastResults.push({
                            date: results.list[i].dt,
                            temp: oTemp.eve,
                            units: "C",
                            humidity: results.list[i].humidity
                        });
                    }
                }
                console.table(aForecastResults);
                this.getView().getModel().setProperty("/items", aForecastResults);
            },

            getForecast: function () {
                var oView = this.getView();
                var oParams = {
                    q: "Wroclaw",
                    units: "metric",
                    appid: "ee554b6dadcc2a02996b26ef6f4ab33a",
                    cnt: 14,
                    mode: "json"
                };

                var sUrl = "Weather/data/2.5/forecast/daily";

                var self = this;
                $.get(sUrl, oParams)
                    .done(function (results) {
                        self._mapResults(results);
                    })
                    .fail(function (err) {
                        if (err !== undefined) {
                            console.error("Error!")
                        }
                        self._mapResults(null);
                    });
            },
            getFakedData: function () {
                var aForecastResults = [];
                for (var i = 0; i < 14; i++) {
                    aForecastResults.push({
                        date: "Day " + i,
                        temp: Math.round(Math.random() * 20),
                        units: "C",
                        humidity: Math.round(Math.random() * 100)
                    });
                }
                this.getView().getModel().setProperty("/items", aForecastResults);
            }
        });
    });