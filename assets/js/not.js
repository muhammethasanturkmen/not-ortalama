let studentForm = document.querySelector(".studentForm");
let sinav = document.querySelector(".sinav");
let sinav2 = document.querySelector(".sinav2");
let final = document.querySelector(".final");
let students = document.querySelector(".students");
let silme = document.querySelector(".silme");
let sonuc = 0;
let student = [];


 if(typeof localStorage.student !== 'undefined') {
   student = JSON.parse(localStorage.student);
   renderStudents();
}


function handleTotal() {
  let sinav3 = Number(sinav.value) * 0.3;
  let sinav4 = Number(sinav2.value) * 0.3;
  let sonfinal = Number(final.value) * 0.4;
  sonuc = sinav3 + sinav4 + sonfinal;
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(studentForm);
  let formObj = Object.fromEntries(formData);
  student.push(formObj);
  handleTotal();
  save();
  renderStudents();
}

studentForm.addEventListener("submit", handleFormSubmit);

function save() {
  localStorage.student = JSON.stringify(student);
}

function renderStudents() {
  students.innerHTML="";
  for (let i = 0; i < student.length; i++) {

    if (sonuc >= 90) {

      students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Tebrikler, notunuz: ${sonuc} Harf notunuz:AA </h3>`;

    } else if (sonuc >= 85) {
    
      students.innerHTML += `
      <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
      <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
      <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
      <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
      <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
      <p> <strong>Final :</strong>${student[i].final} </p>
     <h3>Tebrikler, notunuz: ${sonuc} Harf notunuz:BA </h3>`;

    }else if (sonuc >= 80) {
    
      students.innerHTML += `
      <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
      <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
      <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
      <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
      <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
      <p> <strong>Final :</strong>${student[i].final} </p>
     <h3>Tebrikler, notunuz: ${sonuc} Harf notunuz:BB </h3>`;

    } 
    else if (sonuc >= 75) {


          students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Tebrikler,Geçer notunuz: ${sonuc} Harf notunuz:CB </h3>`;


    } else if (sonuc >= 70) {

          students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Tebrikler,Geçer notunuz: ${sonuc} Harf notunuz:CC </h3>`;


    } else if (sonuc >= 65) {


      students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Koşullu Geçer notunuz: ${sonuc} Harf notunuz:DC </h3>`;


    } else if (sonuc >= 60) {

      students.innerHTML += `
      <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
      <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
      <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
      <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
      <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
      <p> <strong>Final :</strong>${student[i].final} </p>
     <h3>Koşullu Geçer notunuz: ${sonuc} Harf notunuz:DD </h3>`;


    } else if (sonuc >= 50) {


     students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Geçemediniz notunuz: ${sonuc} Harf notunuz:FD </h3>`;


    } else {
           students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].surname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].bolum} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Geçemediniz, notunuz: ${sonuc} Harf notunuz:FF </h3>`;
    }
  }
}

function delet() {
  localStorage.clear();
  student = [];
  renderStudents();
}

silme.addEventListener("click",delet);