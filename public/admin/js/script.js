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
