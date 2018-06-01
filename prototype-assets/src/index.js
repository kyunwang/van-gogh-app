(function() {
	var demoSelection = {
		selection: [],
		selectButtons: document.querySelectorAll('.selection-screen li'),
		// getButtons: ,
		init: function() {
			console.log(this.selectButtons[0]);

			if (this.selectButtons) {
				this.selectButtons.forEach(button => {
					button.addEventListener('click', demoSelection.onSelect);
				});
			}
		},
		onSelect: function(evt) {
			if (demoSelection.selection.length < 2) {
				this.classList.add('selected');
				demoSelection.selection.push(this);
			} else {
				demoSelection.selection[0].classList.remove('selected');
				demoSelection.selection.shift();

				if (!this.classList.contains('selected')) {
					this.classList.add('selected');
					demoSelection.selection.push(this);
				}
			}

			if (demoSelection.selection.length === 1) {
				document.querySelector('.confirm-btn').classList.add('chosen');
			}
		},
	};

	demoSelection.init();
})();
