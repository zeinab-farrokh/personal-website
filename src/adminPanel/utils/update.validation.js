function validUpdate(image) {
  const errors = {};

  if (image) {
    if (image.size > 150000) {
      errors.image = "حداکثر اندازه مجاز برای عکس 100 کیلوبایت می باشد";
    } else {
      delete errors.image;
    }
  }

  return errors;
}

export default validUpdate;
