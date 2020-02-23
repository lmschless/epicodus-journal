// export class Entry
export class Entry {
	constructor(title, entry) {
		this.title = title;
		this.entry = entry;
	}
	wordCount() {
		let totalWords = this.body.split('').length();
	}
}
