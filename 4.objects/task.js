function Student(name, gender, age) {
 this.name = name;
 this.gender = gender;
 this.age = age;
 this.marks = [];
}

let student1 = new Student("Михаил", "мужской", 20);
let student2 = new Student("Анна", "женский", 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

student1.setSubject("Algebra");
student2.setSubject("Geometry");

Student.prototype.addMarks = function (...marks) {
  if (!this.marks) {
    return;
  }
  const safe = marks.filter(v => typeof v === "number" && Number.isFinite(v));
  this.marks.push(...safe);
}

student1.addMarks(3, 5, 4);
student2.addMarks(4, 5, 2);

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0
  }
  const sum = this.marks.reduce((acc, n) => acc + n, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

student1.exclude("плохая учеба");
student2.exclude("плохая учеба");