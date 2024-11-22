function validationTrackingForm(data) {
  const errors = {};
  if (!data.code) {
    errors.code = "کد پیگیری را وارد کنید";
  } else {
    delete errors.code;
  }

  if (!data.mobile) {
    errors.mobile = "شماره موبایل خود را وارد کنید";
  } else if (!data.mobile.match(/^[0][9][0-9][0-9]{8,8}$/)) {
    errors.mobile = "شماره موبایل معتبر وارد کنید";
  } else {
    delete errors.mobile;
  }

  return errors;
}

export default validationTrackingForm;
