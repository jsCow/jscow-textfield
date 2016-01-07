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
	
	info: function() {
		
		this.trigger('state', {
			state: 'info'
		});
		
		return this;
	},
	
	success: function() {
		
		this.trigger('state', {
			state: 'success'
		});
		
		return this;
	},
	
	warning: function() {
		
		this.trigger('state', {
			state: 'warning'
		});
		
		return this;
	},
	
	danger: function() {
		
		this.trigger('state', {
			state: 'danger'
		});
		
		return this;
	},
	
	standard: function() {
		
		this.trigger('state', {
			state: false
		});
		
		return this;
	},
	
	type: function(type) {
		
		this.trigger('type', {
			type: type
		});
		
		return this;
	}
	
};

jsCow.res.model.textfield = function() {
	
	this.data = {
		enabled: true,
		visible: true,
		value: "",
		type: "text",
		state: false
	};
	
};
jsCow.res.model.textfield.prototype = {
	
	init: function(e) {
		this.trigger("model.ready", this.data);
	}
	
};

jsCow.res.view.textfield = function() {
	
	this.dom = {};
	this.dom.main = $('<div/>').addClass('jsc-form-input');
	this.dom.field = $('<input/>').addClass('jsc-form-input-field').appendTo(this.dom.main);
	
	// Not neded fpr this component type
	// this.dom.content = $('<div/>').addClass('jsc-textfield-content').appendTo(this.dom.main);
	
};
jsCow.res.view.textfield.prototype = {
	
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

jsCow.res.controller.textfield = function() {};
jsCow.res.controller.textfield.prototype = {
	
	init: function() {
		this.on("model.ready", this.isModelReady);
		this.on("value", this.value);
		this.on("state", this.state);
		this.on("changed", this.changed);
		this.on("type", this.type);
	},
	
	isModelReady: function() {
		this.trigger(
			"view.init", 
			this.cmp().config()
		);
	},
	
	value: function(e) {
		this.cmp().config({
			value: e.data.value
		});
	},
	
	state: function(e) {
		this.cmp().config({
			state: e.data.state
		});
	},
	
	changed: function(e) {
		this.cmp().config({
			value: e.data.value
		});
	},
	
	type: function(e) {
		this.cmp().config({
			type: e.data.type
		});
	}	
};
