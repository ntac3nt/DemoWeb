// filt status
module.exports = (req) => {
  const button = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: "",
    },
  ];

  if (req.status) {
    const index = button.findIndex((item) => {
      return item.status == req.status;
    });
    button[index].class = "active";
  } else {
    const index = button.findIndex((item) => {
      return item.status == "";
    });
    button[index].class = "active";
  }
  return button;
};
