function isValidPhoto(data) {
  const errors = {};
  if (!data.image) {
    errors.image = "عکس را وارد کنید";
  } else {
    delete errors.image;
  }
  if (data.image) {
    if (data.image.size > 150000) {
      errors.image = "حداکثر اندازه مجاز برای عکس 100 کیلوبایت می باشد";
    } else {
      delete errors.image;
    }
  }

  if (!data.title) {
    errors.title = "موضوع را وارد کنید";
  } else {
    delete errors.title;
  }

  return errors;
}

export default isValidPhoto;
