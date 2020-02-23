// export class Entry
export class Entry {
	constructor(title, entry) {
		this.title = title;
		this.entry = entry;
	}
	wordCount() {
		return this.entry.split(' ');
		// return wordSplit.length();
	}
}
