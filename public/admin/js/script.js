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
