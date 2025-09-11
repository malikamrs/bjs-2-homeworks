class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      return;
    }
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book instanceof PrintEditionItem && book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const found = this.books.find((item) => item?.[type] === value);
    return found ?? null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex((b) => b.name === bookName);
    if (index === -1) return null;
    const [book] = this.books.splice(index, 1);
    return book;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; 
  }

  addMark(mark, subject) {
    if (typeof mark !== "number" || Number.isNaN(mark) || mark < 2 || mark > 5) {
      return;
    }
    if (typeof subject !== "string" || subject.trim() === "") {
      return;
    }

    const key = subject.trim().toLowerCase();

    if (!Array.isArray(this.marks[key])) {
      this.marks[key] = [];
    }
    this.marks[key].push(mark);
  }

  getAverageBySubject(subject) {
    if (typeof subject !== "string" || subject.trim() === "") {
      return 0;
    }
    const key = subject.trim().toLowerCase();
    const arr = this.marks[key];
    if (!Array.isArray(arr) || arr.length === 0) return 0;

    const sum = arr.reduce((acc, n) => acc + n, 0);
    return sum / arr.length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) return 0;

    const total = subjects.reduce(
      (acc, subj) => acc + this.getAverageBySubject(subj),
      0
    );
    return total / subjects.length;
  }
}