// Publications on collection
Meteor.publish('todoItems', function() {
	return TodoItems.find({userId: this.userId});
});

// Server methods for collection
Meteor.methods({
	createTodoItem: function (itemText) {
		return TodoItems.insert({itemText: itemText, userId: this.userId});
	},
	deleteTodoItem: function (itemId) {
		console.log(itemId);
		return TodoItems.remove({_id: itemId, userId: this.userId});
	}
});
