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
  }
  return petArr;
});
console.log(petArr);

function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  const row = document.createElement("tr");
  row.innerHTML = "<HTML code>";
  tableBodyEl.appendChild(row);
}
