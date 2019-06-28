class Visibility {

  static isVisibility(operationVisible = null, operationInvisble = null) {

    document.addEventListener('visibilitychange', () => {
      if (this._isFunction(operationVisible) && this._isDocumentVisible()) {
        operationVisible();
      } else if(this._isFunction(operationInvisble)) {
        operationInvisble();
      }
    })

  }

  static _isFunction(operation) {
    if (typeof operation === "function") {
      return true;
    }

    return false;
  }

  static _isDocumentVisible() {

    if (document.visibilityState === "visible") {
      return true;
    }
    return false;
  }

}