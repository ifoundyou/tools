function template(){
	/*
	<section class="new1"></section>
	<section class="new2"></section>
	<section class="new3"></section>
	*/
}
console.log(template.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, ''));
//http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
//http://mockjs.com/