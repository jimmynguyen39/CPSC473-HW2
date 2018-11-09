function Student( first, last, classes, grade) {
  this.firstName = first;
  this.lastName = last;
  this.classes1 = classes.slice(0);
  this.grade1 = grade.slice(0);

}

Student.prototype.getName= function(){
  return this.firstName + " " + this.lastName;
}
Student.prototype.getLastName = function(){
  return this.lastName;

}
Student.prototype.getClasses = function(){
  return this.classes1;

}
Student.prototype.getGrade = function(){
  return this.grade1;

}

function StudentModel()
{
  this.students = new Array();

}

StudentModel.prototype.getStudents = function()
{
  return this.students;
}

StudentModel.prototype.addStudents = function(student)
{
  this.students.push(student);
}

StudentModel.prototype.SearchforStudent = function(lastName)
{
  var found = new Array();

  for (var i = 0; i < this.students.length; i++)
  {
    if(this.students[i].lastName == lastName)
    {
      found.push(this.students[i]);
    }

  }
  return found;
}

function ListView(model)
{
  this.model = model;
}

ListView.prototype.createList = function(lastName){
        var ul = document.getElementById("list");
        var li;
       
        var newFound = this.model.SearchforStudent(lastName);

        for(var i = 0; i < newFound.length; i++)
        {
            li = document.createElement("li");
            var liText = document.createTextNode(newFound[i].getName());
            
            
            li.appendChild(liText);
            li.setAttribute("id", "student-name-" + (i+1));
            

            li.addEventListener("click", function(e){
              var table1 = document.getElementById("table2");
              var tbl_body = document.createElement("tbody");
              var tbl = document.createElement("table");
              var a = document.getElementById(e.target.id).innerHTML;
              var searchStudent = newFound.find(function(element) {
                return element.getName() == a; 
                });
              var liText1 = searchStudent.getClasses();
              var liText2 = searchStudent.getGrade();
      
              for( var i = 0; i < liText1.length; i++) {
                var row = document.createElement("tr"); 
                var class1 = document.createElement("td"); 
                var classValue = document.createTextNode(liText1[i]); 
                class1.appendChild(classValue); 
                row.appendChild(class1); 
                var grade = document.createElement("td"); 
                var gradeValue = document.createTextNode(liText2[i]); 
                grade.appendChild(gradeValue); 
                row.appendChild(grade); 
                tbl_body.appendChild(row);
            }
            tbl.appendChild(tbl_body); 
            table1.appendChild(tbl);     
          })
            ul.appendChild(li);

        }
        




}
