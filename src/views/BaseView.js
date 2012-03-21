/**
 * Copyright (c) 2011, Scott van Looy.
 * All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the <organization> nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @author Scott van Looy
 */

J$.reqNameSpace('J$.views');
J$.views.BaseView = (function(){
	/** PRIVATE METHODS **/
	var defaults=[];
	
	var loadComponents = function(ns,arr,view,defaults){
		var l = arr.length;
		while (l--) {
			if (arr[l] && ns[arr[l]]) {
				var ui = ns[arr[l]];
				if (typeof ui === 'function') {
					ui = new ui(view);
				}else{
					ui.setView(view);
				}
				if(defaults){
					defaults.push(ui);
				}
			}
		}
	};
	
	/** API METHODS **/
	return {
		
		/**
		 * 
		 * @param {Object} ns - the namespace your UIs can be found under.
		 * @param {string} arr - An array of UI names.
		 */
		setDefaultComponents:function(ns,arr){
			defaults=[];
			loadComponents(ns, arr, null, true);
		},
		requires:function(ns,arr,view){
			var uiMap = J$.utils.ArrayUtils.combine(arr,defaults);
			loadComponents(ns,arr, view);
		}
	};
})();