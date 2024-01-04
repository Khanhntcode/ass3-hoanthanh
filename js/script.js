function handleSubmit() {
  // lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  //lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  //điều kiện để là 1 email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // console.log("check value email", emailValue);

  //dùng match để kiểm tra với email vừa nhập
  const checkEmail = emailValue.match(regex);
  // console.log("email", checkEmail);

  //Lấy phần chứa thông tin user
  const sectionContent = document.querySelector("#info .section-content");
  console.log("check section", sectionContent);

  //Lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    // Nội dung bên trong thẻ p không có gì, thẻ rỗng
    errorEmail.innerHTML = "";
  } else {
    // Hiện thị nội dung bên trong thẻ p
    errorEmail.innerHTML = "Vui lòng nhập đúng địa chỉ ";
  }
}
// khi di chuột vào ô sẽ hiển thị nút button
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
// Khi di chuột ra ngoài sẽ bị mất nút button
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "none";
}

// Khi click chuột nào nút View more
function handleViewMore(element) {
  // Lấy phần tử cha gần nhất có class "parent"
  const parentElement = element.closest(".parent");
  // Lấy phần tử có class "view-more" bên trong phần tử cha
  const viewMore = parentElement.querySelector(".view-more");
  // Lấy phần tử có class "section-content" bên trong phần tử cha
  const sectionContent = parentElement.querySelector(".section-content");

  // Kiểm tra xem phần tử "sectionContent" có class "hidden" hay không
  if (sectionContent.classList.contains("hidden")) {
    // Nếu có, loại bỏ class "hidden" và cập nhật nội dung của nút "viewMore"
    sectionContent.classList.remove("hidden");
    viewMore.innerHTML = "View less";
  } else {
    // Ngược lại, thêm class "hidden" và cập nhật nội dung của nút "viewMore"
    sectionContent.classList.add("hidden");
    viewMore.innerHTML = "View more";
  }
}
