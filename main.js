class person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    get Salary() {
        return this.salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Noor", 15, "student1");
// student1.registerForCourses("Metaverse")
// console.log(student1.courses)
const student2 = new Student("Raza", 18, "student2");
console.log(student1);
const instructor1 = new Instructor("Quddus", 19, 100000);
// console.log(instructor1.age)
// instructor1.assignCourse("Artificial Intelligence")
// instructor1.assignCourse("Block Chain")
// console.log(instructor1.courses)
console.log(instructor1);
const instructor2 = new Instructor("Aryan", 20, 900000);
const course1 = new Course("course1", "metaverse");
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(course1);
// console.log(course1.students[0])
// console.log(student1.courses)
// console.log(course1.instructor)
const course2 = new Course("course2", "blockchain");
const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
console.log(department1);
export {};
