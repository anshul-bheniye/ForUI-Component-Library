// ALERT START
const hide = document.querySelector('#alert-hide');
const close = document.querySelector('#alert-close');
const callbackAlertHide = () => hide.style.display = "none";
close.addEventListener('click', callbackAlertHide);
// ALERT END

// CARD START
const cardHide = document.querySelector('#card-hide');
const cardClose = document.querySelector('#card-close');
const callbackCardHide = () => cardHide.style.display = "none";
cardClose.addEventListener('click', callbackCardHide);
// CARD END