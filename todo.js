if (Meteor.isClient) {

  // Rig some famo.us deps
  famousPolyfills;
  famous.core.famous;

  // Make sure dom got a body...
  Meteor.startup(function() {
    var mainContext = famous.core.Engine.createContext();
	var InputSurface = require('famous/surfaces/InputSurface');
	var SequentialLayout = require('famous/views/SequentialLayout');
	var Modifier = require('famous/core/Modifier');
	var Surface = require('famous/core/Surface');

	// build our input surfaces and group them together
	var todoItem = new InputSurface({
		size:[150,50],
		type: 'text',
		placeholder: "e.x. 'New Todo'"

	});
	var todoButton = new InputSurface({
		size:[50,50],
		type: 'button'
	});
	var newTodo = new SequentialLayout({
		direction: famous.utilities.Utility.Direction.X,
	});
	newTodo.sequenceFrom([todoItem,todoButton]);

	// load a list of todos into our array
    var surfaces = [newTodo];
    var todoList = new SequentialLayout({
		direction: famous.utilities.Utility.Direction.Y,
		size:[200,200]
	});
    todoList.sequenceFrom(surfaces);

    var counter = 0;

	// events
    todoButton.on("click", function() {
		var text;

		// re-focus the input box after clicking the button
		todoItem.focus();

		if (! (text = todoItem.getValue())) {
			// if the text field is empty, we're done here.
			return;
		}

		// clear away any text in the box
		todoItem.setValue('');

		// create our new todo item surface
        surfaces.push(new Surface({
             content: text,
			 size:[200,50],
             properties: {
                 backgroundColor: "white",
				 color: "black",
				 border: "1px solid black",
                 textAlign: 'center'
             }
        }));
    });

    mainContext.add(todoList);
//    mainContext.add(newTodo);
  });

}
