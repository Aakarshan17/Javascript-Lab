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
