import './index.css';
import './ui.js';
let totalWords;

class Entry {
	constructor(title, body) {
		this.title = title;
		this.body = body;
	}
	wordCount() {
		totalWords = this.body.split('');
	}
}
