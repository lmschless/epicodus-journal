import './index.css';
import { Entry } from './entry.js';

$(document).ready(function() {
	$('#journal-form').submit(function(e) {
		e.preventDefault();
		const title = $('#title').val();
		const entry = $('#entry').val();
		console.log(title, entry);

		let newEntry = new Entry(title, entry);
		console.log(this.title, newEntry.entry);
		$('#solution').append(`<div><h1>${title}</h1><p>${entry}</p></div>`);
		$('#title').val('');
		$('#entry').val('');
	});
});
