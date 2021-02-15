import {Popup} from './Popup.js';

export  class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._button = this._popup.querySelector('.popup__button-submit');
        this._buttonDefaultText = this._button.textContent;
        this._inputList = Array.from(this._form.querySelectorAll('.popup__form-input'));
        this._confirmPasswordInput = this._form.querySelector('[name="confirm-password"]');
        this._numberInput = this._form.querySelector('[name="number"]');

        this._passwordInput = this._form.querySelector('[name="password"]');
        this._nameInput = this._form.querySelector('[name="name"]');
    }

    setEventListeners() {
        super.setEventListeners();
    }
}

