module.exports = {
	init: function(self) {
		console.log('nav');
		this.bind();
	},
	bind: function() {
		const box = document.querySelector('.item');
		box.addEventListener('click', () => {
		    alert('what');    
		});
	}
};
