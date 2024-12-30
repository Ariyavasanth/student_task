let std_name = document.getElementById("name")
let std_age = document.getElementById("age")
let gender = document.getElementsByName("gender")
let course = document.getElementById("select")
let email = document.getElementById("email")
let table = document.getElementById("display")

let btn = document.getElementById("btn")

btn.addEventListener("click", function () {
  //create a table row 
  let datas = document.createElement("tr")

  //create a td tag and set the values for name
  let nameCell = document.createElement("td")
  nameCell.textContent = std_name.value

  //create a td tag and set the values for age
  let ageCell = document.createElement("td")
  ageCell.textContent = std_age.value

  //create a td tag and set the values for email
  let emailCell = document.createElement("td")
  emailCell.textContent = email.value

  //create a td tag and insert the value in that tag
 
  
  let genderCell = document.createElement("td");
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderCell.textContent = gender[i].value; // Get the selected gender's value
      break;
    }
  }


  //create a td tag
  let courseCell = document.createElement("td");
  if(course.checked){
    courseCell.textContent = course.value;
  }
  

  //create a td tag and create a button and set the text for the button
  
  let delet_Cell = document.createElement("td")
  let delet_btn = document.createElement("button")

  delet_btn.textContent = "Delete"
  delet_btn.style.backgroundColor = "red"
  delet_btn.style.padding = "5px"
  delet_btn.style.color = "white"
  delet_btn.style.width = "100%"

  //event handelers for delet btn
  delet_btn.addEventListener("click",function(){
    datas.remove()//remove the row

  })

  //add delete btn for all rows
  delet_Cell.appendChild(delet_btn)

  //add inputs in the cells
  datas.appendChild(nameCell)
  datas.appendChild(ageCell)
  datas.appendChild(courseCell)
  datas.appendChild(genderCell)
  datas.appendChild(emailCell)
  datas.appendChild(delet_Cell)

  //add the full rows for table
  table.appendChild(datas)

     // Clear inputs after adding the row
     std_name.value = "";
     std_age.value = "";
     email.value = "";
     course.value = "";
    
});


