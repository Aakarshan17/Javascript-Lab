const student = {
    name: 'Alice Johnson',
    age: 21,
    enrolled: true,
    courses: ['Mathematics', 'Physics', 'Chemistry'],
    displayInfo: function() {
      return `Student: ${this.name}, Age: ${this.age}`;
    }
  };
  
console.log(student.name);
console.log(student.age); 
console.log(student.displayInfo()); 

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log(newStudent);

const { name, courses } = student;
console.log(name);
console.log(courses);

const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log(score1);
console.log(score2);

const clonedStudent = { ...student, graduationYear: 2024 };
console.log(clonedStudent);

const newCourses = ['English', 'Computer Science'];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses);

student.addCourse = function(course) {
    this.courses.push(course);
  };

student.totalCourses = function() {
    return this.courses.length;
  };

student.addCourse('Biology');
  console.log(student.courses);
  console.log(`Total Courses: ${student.totalCourses()}`);
