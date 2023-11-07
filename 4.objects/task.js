function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    marks && marks.length && marks.forEach(function (mark) {
        this.marks && this.marks.push(mark);
    }.bind(this));
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length) {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < this.marks.length; i++) {
            count += 1;
            sum += this.marks[i];
        }
        return sum / count;
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
