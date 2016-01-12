/**
  * jsCow textfield component is a reusable component used in client side jsCow applications. 
  * A textfield is a component, which enables users to interact with an application. 
  * 
  * @author Mario Linz <jscow@gmx.de>
  	@class jsCow.res.components.textfield
  * @type Class Provides the main class of the component
  * @constructor 
*/

jsCow.res.components.textfield = function() {};
jsCow.res.components.textfield.prototype = {

	/**
	  * The init method will be called by initializing the component. 
	  * The model, view and controller should be set within this method.
		
		this.addController(jsCow.res.controller.textfield);
		this.addModel(jsCow.res.model.textfield);
		this.addView(jsCow.res.view.textfield);
		
	  * @method init
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	init: function() {
		
		this.addController(jsCow.res.controller.textfield);
		this.addModel(jsCow.res.model.textfield);
		this.addView(jsCow.res.view.textfield);
		
		return this;
	},
	

	/**
	  * This method is a user interaction method to set the value of the textfield.
	  	
	  	// New textfield instance with a default value
	  	textfield = jsCow.get(jsCow.res.components.textfield, {
			value: 'This is the default textfield value'
		});
		
	  	// Set value by method
	  	textfield.value('My textfield value');
	
	
	  * @method value
	  * @param {String} value Value of the textfield.
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	value: function(value) {
		
		if ( typeof value !== 'undefined' ) {
			
			this.trigger('value', {
				value: value
			});
			
		} else {
			
			var cfg = this.config();
			return cfg.value;
			
		}
		
		return this;
	},
	

	/**
	  * This method is a user interaction method to set the state of the textfield.
	  * The textfield will be displayed as a info field.
	  	
	  	// New textfield instance with a default value
	  	textfield6 = jsCow.get(jsCow.res.components.textfield, {
			value: 'Textfield with info status',
			info: true
		});
		textfield6.run();
		
	  	// Set value by method
	  	textfield.info();
		
	
	  * @method info
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	info: function() {
		
		this.trigger('state', {
			state: 'info'
		});
		
		return this;
	},
	
	
	/**
	  * This method is a user interaction method to set the state of the textfield.
	  * The textfield will be displayed as a success field.
	  	
	  	// New textfield instance with a default value
	  	textfield6 = jsCow.get(jsCow.res.components.textfield, {
			value: 'Textfield with info status',
			success: true
		});
		textfield6.run();
		
	  	// Set value by method
	  	textfield.success();
		
	
	  * @method success
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	success: function() {
		
		this.trigger('state', {
			state: 'success'
		});
		
		return this;
	},
	
	
	/**
	  * This method is a user interaction method to set the state of the textfield.
	  * The textfield will be displayed as a warning field.
	  	
	  	// New textfield instance with a default value
	  	textfield6 = jsCow.get(jsCow.res.components.textfield, {
			value: 'Textfield with info status',
			warning: true
		});
		textfield6.run();
		
	  	// Set value by method
	  	textfield.warning();
		
	
	  * @method warning
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	warning: function() {
		
		this.trigger('state', {
			state: 'warning'
		});
		
		return this;
	},
	
	
	/**
	  * This method is a user interaction method to set the state of the textfield.
	  * The textfield will be displayed as a danger field.
	  	
	  	// New textfield instance with a default value
	  	textfield6 = jsCow.get(jsCow.res.components.textfield, {
			value: 'Textfield with info status',
			danger: true
		});
		textfield6.run();
		
	  	// Set value by method
	  	textfield.danger();
		
	
	  * @method danger
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	danger: function() {
		
		this.trigger('state', {
			state: 'danger'
		});
		
		return this;
	},
	
	
	/**
	  * This method is a user interaction method to set the state of the textfield.
	  * The textfield will be displayed as a standard field.
	  	
	  	// New textfield instance with a default value
	  	textfield6 = jsCow.get(jsCow.res.components.textfield, {
			value: 'Textfield with info status',
			standard: true
		});
		textfield6.run();
		
	  	// Set value by method
	  	textfield.standard();
		
	
	  * @method standard
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	standard: function() {
		
		this.trigger('state', {
			state: false
		});
		
		return this;
	},
	
	
	/**
	  * This method is a user interaction method to set the tyoe of the textfield.
	  	
	  	// New textfield instance with a default type
	  	textfield = jsCow.get(jsCow.res.components.textfield, {
			type: 'text|hidden|password|...'
		});
		
	  	// Set value by method
	  	textfield.type('text');
		
	  * @method type
	  * @param {String} type Type of the textfield.
	  * @public
	  * @return {Object} Instance of the component itself.
	  */
	type: function(type) {
		
		this.trigger('type', {
			type: type
		});
		
		return this;
	}
	
};


/**
  * Represents the model class of the jsCow textfield component. 
  * 
  * @author Mario Linz <jscow@gmx.de>
  * @class jsCow.res.model.textfield
  * @type Class Provides the model class of the component
  * @constructor 
  */

jsCow.res.model.textfield = function() {
	
	/**
	  * JSON object with all model data.
	  * Default model data are:
		
		{
			enabled: true,
			visible: true,
			value: "",
			type: "text",
			state: false
		}

	  * 
	  * @property data
	  * @type Object
	  */
	
	this.data = {
		enabled: true,
		visible: true,
		value: "",
		type: "text",
		state: false
	};
	
};
jsCow.res.model.textfield.prototype = {
	
	/**
	  * The model init method will only trigger the internal component event 'model.ready'.
	  * The event data are the model data.
	  * Default listener for this event is registered in the controller of the component. 
	  	
	  	this.trigger("model.ready", this.data);

	  * @method init
	  * @private
	  */
	
	init: function(e) {
		this.trigger("model.ready", this.data);
	}
	
};


/**
  * Represents the view class of the jsCow button component. 
  * 
  * @author Mario Linz <jscow@gmx.de>
  * @class jsCow.res.view.textfield
  * @type Class Provides the view class of the component
  * @constructor 
  */

jsCow.res.view.textfield = function() {
	
	/**
	  * Objekt for all needed HTML-DOM elements of the component.
	  * 
	  * @property dom
	  * @type Object
	  * @default {} Object
	**/
	this.dom = {};
	
	/**
	  * Represents the html main container of the component.
	  * 
	  * @property dom.main
	  * @type Object
	  * @default <div/> jQuery DIV object
	**/
	this.dom.main = $('<div/>').addClass('jsc-form-input');
	
	/**
	  * Represents the html textfield of the component.
	  * 
	  * @property dom.field
	  * @type Object
	  * @default <div/> HTML input tag
	**/
	this.dom.field = $('<input/>').addClass('jsc-form-input-field').appendTo(this.dom.main);
	
	// Not neded fpr this component type
	// this.dom.content = $('<div/>').addClass('jsc-textfield-content').appendTo(this.dom.main);
	
};
jsCow.res.view.textfield.prototype = {
	
	/**
	  * The view init method can used to set default view properties.
	  * By trigger the event 'model.ready' the controller will trigger the event 'view.init' to call this method.
	  * This method register all jquery events for "keyup" and trigger the internal event "chnaged". 
	  	
	  	// For example
	  	this.trigger("mouseover");
	  	this.trigger("mouseout");
	  	this.trigger("press");
	  	this.trigger("pressed");
	  	this.trigger("click");
		
		// The view init will be triggered by the controller
	  	this..trigger("changed", {
			value: this.dom.field.val()
		});

	  * @method init Set all jquery events and trigger the component event 'changed'.
	  */
	
	init: function(e) {	
		
		this.dom.main.keyup(
			
			(function(self, e) {
				return function() {
					if (e.data.enabled) {
						self.trigger("changed", {
							value: self.dom.field.val()
						});
					}
				};
			})(this, e)
			
		);
		
	},
	
	/**
	  * The view update method will update the complete component view by trigger the event 'view.update' with all available model data.
	  	
	  	this.trigger(
	  		"view.update", 
	  		this.cmp().config()
	  	);

	  * @method update
	  * @param {object} eventdata Contains all sent event data
	  */

	update: function(e) {	
		
		if (e.data.enabled) {
			
			this.dom.main.removeClass('jsc-form-input-disabled');
			this.dom.field.prop('disabled', false);
			
			this.dom.field.val(e.data.value);
			this.dom.field.attr('type', e.data.type);
			
			if (e.data.state === 'info' || 
				e.data.state === 'success' || 
				e.data.state === 'warning' || 
				e.data.state === 'danger' ) {
				this.dom.main.removeClass('jsc-form-input-info jsc-form-input-success jsc-form-input-warning jsc-form-input-danger');
				this.dom.main.addClass('jsc-form-input-'+e.data.state);
			} else {
				this.dom.main.removeClass('jsc-form-input-info jsc-form-input-success jsc-form-input-warning jsc-form-input-danger');
			}
			
			if (e.data.visible) {
				this.dom.main.show();
			}else{
				this.dom.main.hide();
			}
			
		}else{
			
			this.dom.main.addClass('jsc-form-input-disabled');
			this.dom.field.prop('disabled', true);
			
		}
		
	}
	
};


/**
  * Represents the controller class of the jsCow textfield component. 
  * 
  * @author Mario Linz <jscow@gmx.de>
  * @class jsCow.res.controller.textfield
  * @type Class Provides the controller class of the component
  * @constructor 
  */

jsCow.res.controller.textfield = function() {};
jsCow.res.controller.textfield.prototype = {
	
	/**
	  * The controller init method register all needed events within the controller and provides all related event handler.

	  	// Code examples
	  	this.on("model.ready", this.isModelReady);
		this.on("value", this.value);
		this.on("state", this.state);
		this.on("changed", this.changed);
		this.on("type", this.type);

	  * @method init
	  */

	init: function() {
		this.on("model.ready", this.isModelReady);
		this.on("value", this.value);
		this.on("state", this.state);
		this.on("changed", this.changed);
		this.on("type", this.type);
	},
	
	/**
	  * The controller isModelReady method is an event handler and will be triggert by the event 'model.ready' with all available model data.
	  * Is the model ready the 'view.init' event will triggert by this handler with all available model data again.
	  	
	  	this.trigger(
			"view.init", 
			e.data
		);

	  * @method isModelReady
	  * @param {object} eventdata Contains all sent event data
	  */

	isModelReady: function() {
		this.trigger(
			"view.init", 
			this.cmp().config()
		);
	},
	
	/**
	  * The controller value method is an event handler and will be triggert by the event 'value' with all available model data.
	  * This method will set value of the HTML input tag.
	  	
	  	this.cmp().config({
			value: e.data.value
		});

	  * @method value
	  * @param {object} eventdata Contains all sent event data
	  */

	value: function(e) {
		this.cmp().config({
			value: e.data.value
		});
	},
	
	/**
	  * The controller value method is an event handler and will be triggert by the event 'state' with all available model data.
	  * This method will set visual state (e.g. default|success|info|warning|danger) of the HTML input tag.
	  	
	  	this.cmp().config({
			value: e.data.state
		});

	  * @method state
	  * @param {object} eventdata Contains all sent event data
	  */

	state: function(e) {
		this.cmp().config({
			state: e.data.state
		});
	},
	
	/**
	  * The controller value method is an event handler and will be triggert by the event 'changed' with all available model data.
	  * If the user interact with the textfield this method will syncronize the value of the HTML input tag with the component model.
	  	
	  	this.cmp().config({
			value: e.data.value
		});

	  * @method changed
	  * @param {object} eventdata Contains all sent event data
	  */

	changed: function(e) {
		this.cmp().config({
			value: e.data.value
		});
	},
	
	/**
	  * The controller value method is an event handler and will be triggert by the event 'type' with all available model data.
	  * This method will set the type of the input tag for the textfield.
	  	
	  	this.cmp().config({
			value: e.data.type
		});

	  * @method type
	  * @param {object} eventdata Contains all sent event data
	  */

	type: function(e) {
		this.cmp().config({
			type: e.data.type
		});
	}	
};
