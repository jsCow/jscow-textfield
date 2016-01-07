$(function(){
	
	console.time('all');
	
	textfield1 = jsCow.get(jsCow.res.components.textfield);
	textfield1.run();
	
	textfield2 = jsCow.get(jsCow.res.components.textfield, {
		value: 'This is the default textfield value'
	});
	textfield2.run();
	
	textfield3 = jsCow.get(jsCow.res.components.textfield, {
		value: 'Textfield with error status',
		danger: true
	});
	textfield3.run();
	
	textfield4 = jsCow.get(jsCow.res.components.textfield, {
		value: 'Textfield with success status',
		success: true
	});
	textfield4.run();
	
	textfield5 = jsCow.get(jsCow.res.components.textfield, {
		value: 'Textfield with warning status',
		warning: true
	});
	textfield5.run();
	
	textfield6 = jsCow.get(jsCow.res.components.textfield, {
		value: 'Textfield with info status',
		info: true
	});
	textfield6.run();
	
	textfield7 = jsCow.get(jsCow.res.components.textfield, {
		value: 'Disabled textfield with warning status',
		warning: true
	}).disable();
	textfield7.run();
	
	console.timeEnd('all');
	console.log(jsCow.componentsObjectList.length, "components created...");
	
});
