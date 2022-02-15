// ALERT START
const hide = document.querySelector('#alert-hide');
const close = document.querySelector('#alert-close');
const callbackAlertHide = () => hide.style.display = "none";
close.addEventListener('click', callbackAlertHide);
// ALERT END