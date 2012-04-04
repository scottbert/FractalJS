/*jslint bitwise: false, browser: true, windows: false, evil: false, white: false, plusplus: true, indent: 4 */
/*globals FF:false,TestCase:false,assertEquals:false,expectAsserts:false,assertFunction:false,assertNoException:false*/
/**
 * @author Scott van Looy
 * @constructor
 */
FF.reqNameSpace('FF.core.controllers');
(function (controllers) {
	"use strict";
	var BaseController = {};
	/** Private methods **/
	/** Public methods **/
	BaseController.callView = function (namespace, view) {
		var ret;
		if (typeof namespace[view] === "function") {
			namespace[view] = new namespace[view]();
			namespace[view].controller = this;
			this.view = namespace[view];
		}
		return namespace[view];
	};
	/**
	 * createController - takes an object and extends it with the BaseController
	 * @param {Object} object to extend;
	 * @return {Object} extended object
	 */
	BaseController.createController = FF.createController;
	controllers.BaseController = BaseController;
}(FF.core.controllers));
