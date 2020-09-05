export const MODAL_FONT_UPLOAD_HANDLER = "MODAL_FONT_UPLOAD_HANDLER";
export const PAYMENT_MODAL_HANDLER = "PAYMENT_MODAL_HANDLER";
export const ETSY_MODAL_HANDLER = "ETSY_MODAL_HANDLER";

export const modalFontUploadhandler = (val) => {
  return {
    type: MODAL_FONT_UPLOAD_HANDLER,
    payload: val,
  };
};
export const etsyModalhandler = (val) => {
  return {
    type: ETSY_MODAL_HANDLER,
    payload: val,
  };
};
export const paymentModalHandler = (val) => {
  return {
    type: PAYMENT_MODAL_HANDLER,
    payload: val,
  };
};
