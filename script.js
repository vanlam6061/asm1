"use strict";
//1 Bắt sự kiện Click vào nút "Submit"
// 2 Lấy dữ liệu từ các Form Input
// 3 Validate dữ liệu
// 4 Thêm thú cưng vào danh sách
// 5 Hiển thị danh sách thú cưng
// 6 Xóa các dữ liệu nhập trong Form Input
// 7 add event for click button

// DOM get element by id
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
//object data
//1 Bắt sự kiện Click vào nút "Submit"
const petArr = [];
submitBtn.addEventListener("click", () => {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: weightInput.value,
    lengthA: lengthInput.value,
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    // bmi: "",
    date: new Date(),
  };
  let validate = true;
  //1 Không có trường nào bị nhập thiếu dữ liệu.
  if (
    data.id == "" ||
    data.name == "" ||
    data.age == "" ||
    data.lengthA == "" ||
    data.weight == "" ||
    data.color == ""
  ) {
    alert("Please fill all fields");
    validate = false;
  }
  //3 Trường Age chỉ được nhập giá trị trong khoảng 1 đến 15. Nếu không hợp lệ, hãy đưa ra thông báo "Age must be between 1 and 15!".
  if (data.age < 1 || data.age > 15) {
    alert("Age must be between 1 and 15!");
    validate = false;
  }
  //4 Trường Weight chỉ được nhập giá trị trong khoảng 1 đến 15. Nếu không hợp lệ, hãy đưa ra thông báo "Weight must be between 1 and 15!".
  if (data.weight < 1 || data.weight > 15) {
    alert("Age must be between 1 and 15!");
    validate = false;
  }
  //   //   //5 Trường Length chỉ được nhập giá trị trong khoảng 1 đến 100. Nếu không hợp lệ, hãy đưa ra thông báo "Length must be between 1 and 100!".
  if (data.lengthA < 1 || data.lengthA > 100) {
    alert("Length must be between 1 and 100!");
    validate = false;
  }
  //   //6 Bắt buộc phải chọn giá trị cho trường Type. Nếu không hợp lệ, hãy đưa ra thông báo "Please select Type!".
  if (data.type == "") {
    alert("Please select Type!");
    validate = false;
  }
  //   //7 Bắt buộc phải chọn giá trị cho trường Breed. Nếu không hợp lệ, hãy đưa ra thông báo "Please select Breed!".
  if (data.breed == "") {
    alert("Please select Breed!");
    validate = false;
  }

  if (validate == true) {
    petArr.push(data);
    renderTableData(petArr);
    clearInput();
  }
  return petArr;
});
console.log(petArr);
const tableBodyEl = document.getElementById("tbody");
function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th scope="row">${petArr[i].id}</th>
		<td>${petArr[i].name}</td>
		<td>${petArr[i].age}</td>
		<td>${petArr[i].type}</td>
	  <td>${petArr[i].weight} kg</td>
		<td>${petArr[i].lengthA} cm</td>
		<td>${petArr[i].breed}</td>
		<td>
		<i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
		</td>
		<td><i class="bi ${
      petArr[i].vaccinated == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
		<td><i class="bi ${
      petArr[i].dewormed == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
		<td><i class="bi ${
      petArr[i].sterilized == true ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
    <td>${petArr[i].bmi ?? "?"} </td>
		<td>${petArr[i].date}</td>
		<td><button type="button" class="btn btn-danger" onclick="deletePet('${
      petArr[i].id
    }')">Delete</button>
		</td>
  `;
    tableBodyEl.appendChild(row);
  }
}
const clearInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
  date: new Date();
};

const deletePet = (petId) => {
  // Confirm before deletePet
  if (confirm("Are you sure?")) {
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].id == petId) {
        petArr.splice(i, 1);
        renderTableData(petArr);
      }
    }
  }
};
function healthyStandard(petArr) {
  return (
    petArr.vaccinated == true &&
    petArr.dewormed == true &&
    petArr.sterilized == true
  );
}
let healthyCheck = false;
const healthyPetArr = [];
const healthyCheckBtn = document.getElementById("healthy-btn");
healthyCheckBtn.addEventListener("click", () => {
  if (healthyCheck === true) {
    healthyPetArr = petArr.filter(healthyStandard);
    renderTableData(healthyPetArr);
    healthyCheck = false;
  } else {
    renderTableData(petArr);
    healthyCheckBtn.textContent = "Show Healthy Pet";
    healthyCheck = true;
  }
});
const btnCalculateBMI = document.getElementById("bmi-btn");

btnCalculateBMI.addEventListener("click", calculateBMI(petArr));
calculateBMI;
function calculateBMI(petArr) {
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].type === "Dog") {
      petArr[i].bmi = (petArr[i].weight * 703) / petArr[i].lengthA ** 2;
    } else {
      petArr[i].bmi = (petArr[i].weight * 886) / petArr[i].lengthA ** 2;
    }
  }
  renderTableData(petArr);
}
