import './index.css';
import { Entry } from './entry.js';
import { wordSplit } from './entry.js';
let newEntry;
let entry;

$(document).ready(function() {
	$('#journal-form').submit(function(e) {
		e.preventDefault();
		const title = $('#title').val();
		entry = $('#entry').val();
		console.log(title, entry);

		newEntry = new Entry(title, entry);
		console.log(newEntry);

		// console.log(newEntry.wordCount(newEntry.entry));

		$('#solution').append(`<div><h1>${newEntry.title}</h1><p>${newEntry.entry}</p></div>`);

		$('#title').val('');
		$('#entry').val('');
	});

	$('#word-count').click(function(e) {
		e.preventDefault();
		$('#solution').append(newEntry.wordCount());
	});
});
