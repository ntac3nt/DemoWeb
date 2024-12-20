// change status

const changestatus = document.querySelectorAll("[button-change-status]");
if (changestatus.length > 0) {
  const formchange = document.querySelector("#form-change-status");
  const path = formchange.getAttribute("data-path");

  changestatus.forEach((item) => {
    item.addEventListener("click", () => {
      const statuscurrent = item.getAttribute("data-status");
      const id = item.getAttribute("data-id");
      let statuschange = statuscurrent == "active" ? "inactive" : "active";
      const action = path + `/${statuschange}/${id}?_method=PATCH`;
      formchange.action = action;

      formchange.submit();
    });
  });
}

// show upload image
const uploadimage = document.querySelector("[upload-image]");
if (uploadimage) {
  const uploadimageinput = document.querySelector("[upload-image-input]");
  const uploadimagepreview = uploadimage.querySelector(
    "[upload-image-preview]"
  );
  uploadimageinput.addEventListener("change", (e) => {
    const [file] = e.target.files;
    if (file) {
      uploadimagepreview.src = URL.createObjectURL(file);
    }
  });
}

// end show upload image
