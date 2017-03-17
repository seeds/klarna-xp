var libs = {
	portal: require('/lib/xp/portal'),
	content: require('/lib/xp/content'),
	thymeleaf: require('/lib/xp/thymeleaf')
};

var conf = {
	view: resolve('copy-me.html') // TODO: This is not the view-file you're looking for ... or is it?
};

exports.get = function(req) {

	/* ### Collect ### */
	var content = libs.portal.getContent(); // Get current content that is viewed. See the docs for JSON format.
	var component = libs.portal.getComponent(); // Or, get config (if any) for this particular part. See the docs for JSON format.

	/* ### Manipulate ### */
	// TODO: if needed, manipulate the collected data here

	/* ### Prepare ### */
	var model = {
		content: content,
		component: component
	};

	/* ### Return ### */
	return {
		body: libs.thymeleaf.render(conf.view, model)
	};

};
