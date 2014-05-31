define(function(require, exports, module) {
	var Engine           = require("famous/core/Engine");
	var ViewSequence     = require("famous/core/ViewSequence");
	var ImageSurface     = require("famous/surfaces/ImageSurface");
	var SequentialLayout = require("famous/views/SequentialLayout");
	var Scrollview       = require("famous/views/Scrollview");
	var Utility          = require('famous/utilities/Utility');

	var mainContext = Engine.createContext();

	var sequentialLayout = new Scrollview({
		direction: Utility.Direction.Y
	});

	var surfacesSequence = new ViewSequence();


    // your app here
	var props = {
        size: [200, 200],
        content: 'http://lorempixel.com/200/200'
    };
	var img1 =  new ImageSurface(props);
	var img2 =  new ImageSurface(props);
	var img3 =  new ImageSurface(props);

	surfacesSequence.push(img1);
	surfacesSequence.push(img2);
	surfacesSequence.push(img3);
	console.debug(surfacesSequence);
	sequentialLayout.sequenceFrom(surfacesSequence);

	mainContext.add(sequentialLayout);
});

