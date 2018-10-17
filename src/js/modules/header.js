module.exports = {
	init: function(self) {
		this.bind();
	},
	bind: function() {
		const box = document.querySelector('.item');
		box.addEventListener('click', () => {
		    alert('what');    
		});
	}
};
