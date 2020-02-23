// export class Entry
export class Entry {
	constructor(title, entry) {
		this.title = title;
		this.entry = entry;
	}
	wordCount() {
		console.log(this.entry.split(' '));
		return this.entry.split(' ');
		// return wordSplit.length();
	}
}
