let name = document.getElementById("text");
let city = document.getElementById("city");
let table = document.getElementById("tble");
let addBtn = document.getElementById("addBtn");

var rates = document.getElementsByName("r1");
var checkbox = document.getElementsByName("check");
let array = [];
let radio = 0;
let checkbox1 = 0;
let valid = 0;

let rate_value = "";

const handleName = (e) => {
  let value = e.target.value;
  if (value.length >= 10) {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("nameErr").classList.remove("alert-danger");

  } else {
    name.classList.add("is-invalid");
    document.getElementById("nameErr").innerHTML = "Enter atleast 10 characters";
      document.getElementById("nameErr").classList.add("alert-danger");
  }
  console.log(typeof city.value);
};

const handleCity = (e) => {
  let value = e.target.value;
  if (value == 0) {
    city.classList.remove("is-valid");
    city.classList.add("is-invalid");
    document.getElementById("cityErr").innerHTML = "please select any one";
      document.getElementById("cityErr").classList.add("alert-danger");
  } else {
    city.classList.remove("is-invalid");
    city.classList.add("is-valid");
    document.getElementById("cityErr").innerHTML = "";
    document.getElementById("cityErr").classList.remove("alert-danger");
  }
};

const handleCheckbox = (e) => {

  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkbox1 = 1;
    }
  }

  if(checkbox1 == 0){
    document.getElementById("checkErr").innerHTML = "please check any option";
      document.getElementById("checkErr").classList.add("alert-danger");

  }else{
  for (var i = 0; i < checkbox.length; i++) {
    // if (checkbox[i].checked) {
    checkbox[i].classList.remove("is-invalid");
    document.getElementById("checkErr").innerHTML = "";
    document.getElementById("checkErr").classList.remove("alert-danger");
    // }
  }
}
};

const handleRadio = (e) => {

  for (var i = 0; i < rates.length; i++) {
    if (rates[i].checked) {
      rate_value = rates[i].value;
      radio++;
    }
  }
  console.log(radio)
  if (radio == 0) {
    // rates[0].classList.add("is-invalid");
    document.getElementById("radioErr").innerHTML = "please select any one";
    document.getElementById("radioErr").classList.add("alert-danger");
  }else{

  for (var i = 0; i < rates.length; i++) {
    rates[i].classList.remove("is-invalid");
    document.getElementById("radioErr").innerHTML = "";
    document.getElementById("radioErr").classList.remove("alert-danger");
  }
}
};

name.addEventListener("input", handleName);
name.addEventListener("blur", handleName);
// city.addEventListener("focus", handleCity);
city.addEventListener("click", handleCity);
city.addEventListener("change", handleCity);
city.addEventListener("blur", handleCity);
for (let i = 0; i < 3; i++) {
  checkbox[i].addEventListener("input", handleCheckbox);
  checkbox[i].addEventListener("blur", handleCheckbox);
}

for (let i = 0; i < 2; i++) {
rates[i].addEventListener("input", handleRadio);
rates[i].addEventListener("focusout", handleRadio);
}
addBtn.addEventListener("click", () => {

let check_val = "";

  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkbox1 = 1;
      check_val += checkbox[i].value + " ";
    }
  }

    if (
    name.value.length >= 10 &&
    checkbox1 != 0 &&
    radio != 0 &&
    city.value != 0
  ) {
    array = [
      ...array,
      {
        Name: name.value,
        city: city.value,
        gender: rate_value,
        hobby: check_val,
      },
    ];

    table.innerHTML = "";
    array.map((value, key) => {
      let html = `<tr class="text-capitalize">
                <td>${value.Name}</td>
                <td>${value.city}</td>
                <td class="gender">${value.gender}</td>
                <td>${value.hobby}</td>
                </tr>`;
      table.innerHTML += html;
      let gender = document.getElementsByClassName('gender');
  console.log(gender.innerText)
  for(let i=0;i<gender.length;i++){
  if(gender[i].innerHTML == "male")
  {
    gender[i].style.backgroundColor = "green"
    gender[i].style.color ="white";
  }
  else{
    gender[i].style.backgroundColor = "hotpink"
    gender[i].style.color ="white";

  }
}
    });

    

    name.value = "";
    name.classList.remove("is-valid");

    city.value = "0";
    city.classList.remove("is-valid");
    checkbox[0].classList.remove("is-invalid");
    rates[0].classList.remove("is-invalid");

    rate_value = "";
    for (var i = 0; i < rates.length; i++) {
      if (rates[i].checked) {
        rates[i].checked = false;
        radio = 0;
      }
    }
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkbox[i].checked = false;
        checkbox1 = 0;
      }
    }
    valid = 1;
  } else {
    valid = 0;
  }

  if (valid == 0) {
    if (name.value.length < 10) {
      name.classList.add("is-invalid");
      document.getElementById("nameErr").innerHTML =
        "enter atleast 10 characters";
      document.getElementById("nameErr").classList.add("alert-danger");
    }

    if (city.value == 0) {
      city.classList.add("is-invalid");
      document.getElementById("cityErr").innerHTML = "please select any one";
      document.getElementById("cityErr").classList.add("alert-danger");
    }

    if (radio == 0) {
      // rates[0].classList.add("is-invalid");
      document.getElementById("radioErr").innerHTML = "please select any one";
      document.getElementById("radioErr").classList.add("alert-danger");
    } 

    if (checkbox1 == 0) {
      // checkbox[0].classList.add("is-invalid");
      document.getElementById("checkErr").innerHTML = "please check any option";
      document.getElementById("checkErr").classList.add("alert-danger");
    } 
  }
  
});


