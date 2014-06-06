define(function(require, exports, module) {
	var Engine  = require("famous/core/Engine");
	var Utility = require('famous/utilities/Utility');
	var InputSurface = require("famous/surfaces/InputSurface");
	var SequentialLayout = require("famous/views/SequentialLayout");
	var test = require("test");


	var mainContext = Engine.createContext();
	var todoInputLayout = new SequentialLayout({direction:Utility.Direction.X});
	var todoInputSequence = [];

	todoInputSequence.push(new InputSurface({
		size: [200,50],
		name:'new-todo',
		placeholder:'e.x. "Add Todo Items"',
		type: 'text',
		class: 'new-todo'
	}));
	todoInputSequence.push(new InputSurface({
		size: [75,50],
		type: 'button',
		value: 'Go',
		class: 'btn todo-go-btn'
	}));

	todoInputLayout.sequenceFrom(todoInputSequence);
	mainContext.add(todoInputLayout);
});

