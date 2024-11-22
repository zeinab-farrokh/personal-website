function validationContactForm(data) {
  const errors = {};
  if (!data.name) {
    errors.name = "نام و نام خانوادگی را وارد کنید";
  } else {
    delete errors.name;
  }

  if (!data.mobile) {
    errors.mobile = "شماره موبایل خود را وارد کنید";
  } else if (!data.mobile.match(/^[0][9][0-9][0-9]{8,8}$/)) {
    errors.mobile = "شماره موبایل معتبر وارد کنید";
  } else {
    delete errors.mobile;
  }

  if (!data.subject) {
    errors.subject = "موضوع را وارد کنید";
  } else {
    delete errors.subject;
  }

  if (!data.text) {
    errors.text = "متن را وارد کنید";
  } else {
    delete errors.text;
  }

  return errors;
}

export default validationContactForm;
