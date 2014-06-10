define(function(require, exports, module) {
	var Engine  = require("famous/core/Engine");
	var Utility = require('famous/utilities/Utility');
	var InputSurface = require("famous/surfaces/InputSurface");
	var SequentialLayout = require("famous/views/SequentialLayout");
	var EventHandler = require('famous/core/EventHandler');
	var Transform = require('famous/core/Transform');

	var mainContext = Engine.createContext();
	var todoInputLayout = new SequentialLayout({direction:Utility.Direction.X});
	var eventHandler = new EventHandler();
	var todoInputSequence = [];

	var textbox = new InputSurface({
		size: [200,50],
		name:'new-todo',
		placeholder:'e.x. "Add Todo Items"',
		type: 'text',
		class: 'new-todo'
	});

	var button = new InputSurface({
		size: [75,50],
		type: 'button',
		value: 'Go',
		class: 'btn todo-go-btn'
	});

	button.on('click', function() {
		eventHandler.emit('save-todo');
	});

	eventHandler.on('save-todo', function() {
		textbox.setTransform({
			transform: Transform.translate(45,45)
		})
//		console.log('tom!');
	})

	todoInputSequence.push(textbox);
	todoInputSequence.push(button);

	todoInputLayout.sequenceFrom(todoInputSequence);
	mainContext.add(todoInputLayout);
});

