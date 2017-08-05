 function menu() {
   var option = (prompt("Select the option you will use to capture your information\n\
         1.Personal Info\n\
         2.Family References\n\
         3.Laboral Reference\n\
         4.Professional Profile Description\n\
         5.Print Resume\n\
         0.Exit"));

   return parseInt(option);
}

function PersonalInfo() {
   information0 = {
      name: "",
      age: "",
      height: "",
      gender: "",
      birthdate: ""
   };
   information0.name = prompt("Type your name");
   information0.age = prompt("Type your age");
   information0.height = prompt("Type your height");
   information0.gender = prompt("Type your gender");
   information0.birthdate = prompt("Type your birthdate");

   return information0;
}

function FamilyReferences() {
   information1 = {
      name: "",
      age: "",
      gender: "",
      birthdate: "",
      cell: ""
   };
   information1.name = prompt("Type the name of your family contact");
   information1.age = prompt("Type the age of your contact");
   information1.gender = prompt("Type the gender of your contact");
   information1.birthdate = prompt("Type the birthdate of your contact");
   information1.cell = prompt("Type the cellphone of your contact");

   return information1;
}

function LaboralReference() {
   information2 = {
      company: "",
      address: "",
      cell: ""
   };
   information2.company = prompt("Type the name of the company");
   information2.address = prompt("Type the address of the company");
   information2.cell = prompt("Type the cellphone of the company");

   return information2;
}

function ProfessionalProfileDescription() {
   information3 = {
      career: "",
      studies: "",
      college: ""
   };
   information3.career = prompt("Type your career ");
   information3.studies = prompt("Type where did you studied");
   information3.college = prompt("Type the university where you studied");
   
   return information3;
}

function print (){
   
   console.log("Personal Info");
   console.log("Name: "+information0.name);
   console.log("Age: "+information0.age);
   console.log("Height "+information0.height);
   console.log("Gender: "+information0.gender);
   console.log("Birthdate "+information0.birthdate);
   console.log("");
   console.log("Family References");
   console.log("Contact name: "+information1.name);
   console.log("Contact age: "+information1.age);
   console.log("Contact gender: "+information1.gender);
   console.log("Contact cellphone: "+information1.cell);
   console.log("");
   console.log("Laboral Reference");
   console.log("Company name: "+information2.company);
   console.log("Company address: "+information2.address);
   console.log("Company cellphone: "+information2.cell);
   console.log("");
   console.log("Professional Profile Description");
   console.log("Career studied: "+information3.career);
   console.log("School and highschool: "+information3.studies);
   console.log("College: "+information3.college);
}

var option, information0, information1, information2, information3, show;
do {

   option = menu();
   if (option === 1) {
      information0 = PersonalInfo();

   }

   if (option === 2) {
      information1 = FamilyReferences();

   }

   if (option === 3) {
      information2 = LaboralReference();

   }

   if (option === 4) {
      information3 = ProfessionalProfileDescription();

   }
   
   if (option === 5) {
      show = print();
   }

} while (option !== 0);