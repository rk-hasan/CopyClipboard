const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', function(){
	input.select();
	document.execCommand('copy');

	alert("Copied SuccessFully" + input.value);
})