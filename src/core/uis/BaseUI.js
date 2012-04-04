/*jslint bitwise: false, browser: true, windows: false, evil: false, white: false, plusplus: true, indent: 4 */
/*globals FF:false,$:false, TestCase:false,assertEquals:false,expectAsserts:false,assertFunction:false,assertNoException:false, jQuery:false, window:false*/

/**
 * @author Scott van Looy
 */
FF.reqNameSpace('FF.core.uis');
(function (uis) {
	"use strict";
	/** PRIVATE METHODS **/
	var BaseUI = {};

	/** API METHODS **/
	BaseUI.setRootDomNode = function (domNode) {
		BaseUI.root = (domNode.jquery) ? domNode : $(domNode);
	};
	/**
	 * setupUI - sets up a UI, caches its domnode and prepares it for use.
	 * @param {string|object} id - the dom ID or jQuery object of the root element for the UI.
	 */
	BaseUI.setupUI = function (id) {
		if (!FF.mixins.UI) {
			FF.requires(['core.mixins.Native']);
		}
		FF.mixins.UI(this);
		if (!window.jQuery || id.jquery) {
			this.domNode = FF.mixins.Selector(id);
		} else {
			this.domNode = $(id);
		}
		this.contentNode = this.domNode.find('.content');
		this.headerNode = this.domNode.find('.title');
		this.templateNode = this.domNode.find('.template').remove();
		this.footerNode = this.domNode.find('.footer');
	};
	BaseUI.setView = function (view) {
		this.view = view;
	};
	BaseUI.createUI = FF.createUI;
	uis.BaseUI = BaseUI;
}(FF.core.uis));

