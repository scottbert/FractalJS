/*jslint bitwise: false, browser: true, windows: false, evil: false, white: false, plusplus: false, indent: 4 */
/*globals FF:true,$:false, TestCase:false,assertEquals:false,expectAsserts:false,assertFunction:false,assertNoException:false, window:false*/
/**
 * @author scottvanlooy
 */
var FF = (function () {
	/** PRIVATE METHODS **/
	var extend = function (item, inheritant) {
		item.prototype = inheritant;
		item.constructor = item;
	};
	return {
		/** API METHODS **/
		
		/**
		 * reqNameSpace. Requests a namespace. If the namespace does not exist, it will be created
		 * @param {string} req - request in the format of 'my.name.space'
		 * @param {Object} test
		 */
		reqNameSpace : function (req, test) {
			if (!req || typeof req !== "string" || !req.match('\\.')) {
				FF.utils.Console.error('getNameSpace error - requires a string in the format "my.name.space"');
				return null;
			}
			var t = req.split('.'),
				tns = window,
				l = t.length;
			for (var x = 0; x < l; x++) {
				if (tns[t[x]]) {
					tns = tns[t[x]];
				}
				else {
					if (test) {
						return false;
					}
					tns = tns[t[x]] = {};
				}
			}
		},
		requires :  function (requires, namespace) {
			var l = requires.length,
				src;
			if (typeof namespace[requires] === "undefined") {
				for (var n = 0; n < l; n++) {
					src = this.baseUrl + requires[n].replace(/\./gi, '/') + '.js';
					document.write('<script type="text/javascript" src="' + src + '"></script>');
					/*
					var s = document.createElement('script');
					s.src = this.baseUrl + requires[n].replace(/\./gi, '/') + '.js';
					s.type = 'text/javascript';
					document.head.appendChild(s);
					*/
				}
			}
		},
		/**
		 * baseUrl = the base URL for library scripts.
		 */
		baseUrl : (function () {
			var s = document.getElementsByTagName('script');
			var m = s[s.length - 1];
			return m.src.replace(/[^\/]+?$/, '');
			
		})(),
		createController : function (object) {
			return extend(object, FF.controllers.BaseController);
		},
		createView : function (object) {
			return extend(object, FF.views.BaseView);
		},
		createUI : function (object) {
			return extend(object, FF.uis.BaseUI);
		}
	};
})();

/** Core library requires **/
/** INCLUDES **/

FF.requires(
	[
		// utils
		'core.utils.Core',
		'core.utils.ArrayUtils',
		
		//Controllers
		'core.controllers.BaseController',
		
		// Views
		'core.views.BaseView',
		
		//uis
		'core.uis.BaseUI'
	], FF
);