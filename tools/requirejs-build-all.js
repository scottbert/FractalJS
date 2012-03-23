({
	baseUrl: "../src",
	name: "fractal",
	skipModuleInsertion: true,
	include: [
		"core/utils/Core",
		"core/utils/ArrayUtils",
		"core/controllers/BaseController",
		"core/views/BaseView",
		"core/uis/BaseUI",
		"extras",
		"extras/mixins/jQuery",
		"extras/utils/HashMap",
		"extras/utils/Console"
	],
	out:'../compiled/fractal.all.min.js'
})