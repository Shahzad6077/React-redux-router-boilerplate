import {
  MODAL_FONT_UPLOAD_HANDLER,
  PAYMENT_MODAL_HANDLER,
  ETSY_MODAL_HANDLER,
} from "./../Actions/SettingAction";

const initialState = {
  sidePaneOpen: null,
  modalFontupload: false,
  paymentMethodModalOpen: false,
  etsyModalOpen: true,
};

const SettingReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case MODAL_FONT_UPLOAD_HANDLER: {
      return {
        ...state,
        modalFontupload: payload,
      };
    }
    case ETSY_MODAL_HANDLER: {
      return {
        ...state,
        etsyModalOpen: payload,
      };
    }
    case PAYMENT_MODAL_HANDLER: {
      return {
        ...state,
        paymentMethodModalOpen: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default SettingReducer;
