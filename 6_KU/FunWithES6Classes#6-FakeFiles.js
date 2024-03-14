// Task: https://www.codewars.com/kata/fun-with-es6-classes-number-6-fake-files-basic

class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this.countWords = 0;
    this.countSym = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    const dotLastIndex = this.fullName.lastIndexOf(".");
    return dotLastIndex !== -1
      ? this.fullName.slice(0, dotLastIndex)
      : this.fullName;
  }

  get extension() {
    const dotLastIndex = this.fullName.lastIndexOf(".");
    return dotLastIndex !== -1 ? this.fullName.slice(dotLastIndex + 1) : "";
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    this.contents = this.contents ? `${this.contents}\n${str}` : `${str}`;
  }

  gets() {
    const lines = this.contents.split("\n");
    return this.countWords < lines.length
      ? lines[this.countWords++]
      : undefined;
  }

  getc() {
    const chars = this.contents.split("");
    return this.countSym < chars.length ? chars[this.countSym++] : undefined;
  }
}

// №2

let getCounter = function (func) {
  let counter = 0;
  return () => func.call(this, counter++);
};

class File2Var {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._filename = fullName.slice(0, fullName.split("").lastIndexOf("."));
    this._extension = fullName.slice(
      fullName.split("").lastIndexOf(".") + 1,
      fullName.length
    );
    this._contents = contents;

    this.gets = getCounter((counter) => this._contents.split("\n")[counter]);
    this.getc = getCounter((counter) => this._contents[counter]);
  }

  get fullName() {
    return this._fullName;
  }
  get filename() {
    return this._filename;
  }
  get extension() {
    return this._extension;
  }
  getContents() {
    return this._contents;
  }

  write(str) {
    this._contents = this._contents ? this._contents + `\n${str}` : str;
  }
}
