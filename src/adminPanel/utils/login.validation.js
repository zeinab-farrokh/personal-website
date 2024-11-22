function isValidUser(data) {
    const errors = {};
    if (!data.email) {
      errors.email = "ایمیل را وارد کنید";
    } else if (
      !data.email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
    )
      errors.email = "ایمیل معتبر وارد کنید";
    else {
      delete errors.email;
    }
  
    if (!data.password) {
      errors.password = "رمز عبور را وارد کنید";
    } else {
      delete errors.password;
    }
  
    return errors;
  }
  
  export default isValidUser;
  