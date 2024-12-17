// button status

const buttonstatus = document.querySelectorAll("[button-status]");
let url = new URL(window.location.href);
buttonstatus.forEach((button) => {
  button.addEventListener("click", () => {
    const status = button.getAttribute("button-status");
    if (status) {
      url.searchParams.set("status", status);
    } else {
      url.searchParams.delete("status");
    }
    window.location.href = url.href;
  });
});

// search
const formseach = document.querySelector("#form-search");
if (formseach) {
  formseach.addEventListener("submit", (e) => {
    e.preventDefault();

    let url = new URL(window.location.href);
    const key = e.target.elements.keyword.value;
    if (key) {
      url.searchParams.set("keyword", key);
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url;
  });
}

// end search

// pagination

const pagination = document.querySelectorAll("[current]");

if (pagination) {
  pagination.forEach((item) => {
    item.addEventListener("click", () => {
      const page = item.getAttribute("current");
      const url = new URL(window.location.href);

      url.searchParams.set("page", page);
      window.location.href = url;
    });
  });
}

// end pagination

// checkbox-multi
const checkbox_multi = document.querySelector("[checkbox-multi]");

if (checkbox_multi) {
  const input = checkbox_multi.querySelector("input[name='check-all']");
  const inputid = checkbox_multi.querySelectorAll("input[name='id']");
  input.addEventListener("click", () => {
    if (input.checked) {
      inputid.forEach((item) => {
        item.checked = true;
      });
    } else {
      inputid.forEach((item) => {
        item.checked = false;
      });
    }
  });
  inputid.forEach((item) => {
    item.addEventListener("click", () => {
      const countcheck = checkbox_multi.querySelectorAll(
        "input[name='id']:checked"
      ).length;
      if (countcheck == inputid.length) {
        input.checked = true;
      } else {
        input.checked = false;
      }
    });
  });
}

// form change-multi
const changemulti = document.querySelector("[form-change-multi]");
if (changemulti) {
  changemulti.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputchecked = checkbox_multi.querySelectorAll(
      "input[name='id']:checked"
    );
    const input_ids = changemulti.querySelector("input[name='ids']");
    if (inputchecked.length > 0) {
      let ids = [];
      inputchecked.forEach((item) => {
        let id = item.getAttribute("value");
        ids.push(id);
      });
      input_ids.setAttribute("value", ids);
      changemulti.submit();
    } else {
      alert("Vui lòng chọn sản phẩm");
    }
  });
}
