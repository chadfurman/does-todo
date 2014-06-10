if (Meteor.isClient) {

  // Rig some famo.us deps
  famousPolyfills;
  famous.core.famous;

  // Make sure dom got a body...
  Meteor.startup(function() {
	  var Engine       = require("famous/core/Engine");
	  var Modifier     = require("famous/core/Modifier");
	  var InputSurface = require("famous/surfaces/InputSurface");

	  var mainCtx = Engine.createContext();

	  var currentTodoItem = new InputSurface({
		  size: [200, 200],
		  name: 'inputSurface',
		  placeholder: 'e.x. "Add todo items"',
		  type: 'text'
	  });

	  var newTodoButton = new InputSurface({
		  size: [200, 200],
		  name: 'todo-button',
		  value: 'Go',
		  type: 'button'
	  });

	  mainCtx.add(new Modifier({origin: [.5, .5]})).add(currentTodoItem).add(newTodoButton);
  });

}
