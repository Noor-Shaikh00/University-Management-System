class person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age
    }

}

class Student extends person{
    rollNumber:string;
    courses:Course[] = [];
    constructor(name:string, age:number, rollNumber:string){
        super(name,age);
        this.rollNumber = rollNumber
    }

    registerForCourses(course:Course){
         this.courses.push(course)
    }
}

class Instructor extends person {
   private salary:number;
    courses:Course[]=[]

    constructor(name:string, age:number,salary:number){
        super(name,age);
        this.salary = salary;
    }
 
    get Salary(){
        return this.salary
    }

    assignCourse(course:Course){
      this.courses.push(course)
    }
  
}

class Course {
    id:string;
    name:string;
    students:Student[]=[];
    instructor!:Instructor;

    constructor(id:string,name:string){
       this.id=id;
       this.name=name;
    }
    addStudent(student:Student){
        this.students.push(student)
        student.registerForCourses(this)
    }
    setInstructor(instructor:Instructor){
       this.instructor=instructor;
       instructor.assignCourse(this)
    }
}

class Department {
    name:string;
    courses:Course[] =[]

    constructor(name:string){
        this.name = name;
    }

    addCourse(course:Course){
        this.courses.push(course)
    }
}

const student1 = new Student("Noor",15,"student1")

// student1.registerForCourses("Metaverse")
// console.log(student1.courses)

const student2 = new Student("Raza",18,"student2")

console.log(student1)

const instructor1 = new Instructor("Quddus",19,100000)

// console.log(instructor1.age)
// instructor1.assignCourse("Artificial Intelligence")
// instructor1.assignCourse("Block Chain")
// console.log(instructor1.courses)


console.log(instructor1)

const instructor2 = new Instructor("Aryan",20,900000)

const course1 = new Course("course1","metaverse")

course1.addStudent(student1)
course1.addStudent(student2)
course1.setInstructor(instructor1)

console.log(course1)

// console.log(course1.students[0])
// console.log(student1.courses)
// console.log(course1.instructor)

const course2 = new Course("course2","blockchain")

const department1 = new Department("Computer Science")
department1.addCourse(course1)
department1.addCourse(course2)

console.log(department1)

