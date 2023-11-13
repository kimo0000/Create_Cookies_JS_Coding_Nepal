const popup = document.querySelector(".popup"),
  btnDecline = popup.querySelector(".decline"),
  btnAccept = popup.querySelector(".accept");

const declinePopup = () => {
  popup.classList.toggle("hide");
};

const addCookies = () => {
  document.cookie = "Cookies By = touati karim; max-age=" + 60 * 60 * 24 * 30;
  popup.classList.toggle("hide");
};

btnDecline.addEventListener("click", declinePopup);
btnAccept.addEventListener("click", addCookies);
