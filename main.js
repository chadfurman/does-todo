Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.map(function() {
	this.route('todo',{
		path: '*',
		data: { todoItems: TodoItems.find() }
	});
});