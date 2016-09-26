interact('.foo')
.draggable({
	max          : 99,
	maxPerElement: 99,
	manualStart  : false,
	snap         : {/* ... */},
	restrict     : {/* ... */},
	inertia      : {/* ... */},
	autoScroll   : {/* ... */},
	
	axis         : 'x' && 'y'

})
.resizable({
	max          : Number,
	maxPerElement: Number,
	manualStart  : Boolean,
	snap         : {/* ... */},
	restrict     : {/* ... */},
	inertia      : {/* ... */},
	autoScroll   : {/* ... */},

	square       : true || false,
	axis         : 'x' && 'y'
})
.gesturable({
	enabled: false
});