function isValidNews(data) {
  const errors = {};
  if (!data.image) {
    errors.image = "عکس را وارد کنید";
  } else {
    delete errors.image;
  }
  if (data.image) {
    if (data.image.size > 200000) {
      errors.image = "حداکثر اندازه مجاز برای عکس 200 کیلوبایت می باشد";
    } else {
      delete errors.image;
    }
  }

  if (!data.title) {
    errors.title = "موضوع را وارد کنید";
  } else {
    delete errors.title;
  }

  if (!data.text) {
    errors.text = "متن را وارد کنید";
  } else {
    delete errors.text;
  }

  return errors;
}

export default isValidNews;
