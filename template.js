function template(){
	/*
	<section class="new1"></section>
	<section class="new2"></section>
	<section class="new3"></section>
	*/
}
console.log(template.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, ''));