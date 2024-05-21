import dayjs from "dayjs";

export const getToken = () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  } else {
    return null;
  }
};

export const getUserType = () => {
  if (localStorage.getItem("userType")) {
    return localStorage.getItem("userType");
  } else {
    return null;
  }
};

export const validateEmail = (_: any, value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value || emailRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject("Enter a valid email address");
};

export const getStatusColor = (status: string) => {
  let color;
  switch (status) {
    case "Pending":
      color = "yellow";
      break;
    case "Denied":
      color = "red";
      break;
    case "Approved":
      color = "green";
      break;
    default:
      color = "default";
  }

  return color;
};

export const formatDateMonth = (date: string) => {
  return dayjs(date).format("DD MMM YYYY");
};
