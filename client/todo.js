
/**
 * Create Todo Item
 *
 * Event handler for when a Todo Item should be created.  Get's the data from the .todo-item text field
 * @param event
 */
Template.todo.createTodoItem = function(event) {
	if ((event.type === 'keydown' && event.which === 13) || (event.type !== 'keydown')) {
		// find textbox
		var todoItem = $('.new-todo');

		// save item
		Meteor.call('createTodoItem', todoItem.val());

		// clear textbox for intuitive user experience
		todoItem.val('');

		// make sure no links or submissions fire
		event.preventDefault();
	}
}

/**
 * Delete Todo Item
 *
 * Event handler for when a Todo Item should be deleted.  Get's item id from the checkbox value
 * @param event
 */
Template.todo.deleteTodoItem = function(event) {
	todoItemCheckbox = $(event.currentTarget)
	// delete item
	Meteor.call('deleteTodoItem', todoItemCheckbox.val());

	// put the focus on the next todo item's checkbox for easy keyboard navigation
	var nextTodo = todoItemCheckbox.closest('.todo-item').next();
	nextTodo.find('input[type="checkbox"]').focus();
}

// event handler registration
Template.todo.events({
	'click .form-submit, keydown .new-todo': Template.todo.createTodoItem,
	'click .todo-item input[type="checkbox"]': Template.todo.deleteTodoItem
})

