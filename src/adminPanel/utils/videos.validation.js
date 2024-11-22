function isValidVideo(data) {
    const errors = {};
    if (!data.video) {
      errors.video = "ویدیو را وارد کنید";
    } else {
      delete errors.video;
    }
    if (data.video) {
      if (data.video.size > 1e+7) {
        errors.video = "حداکثر اندازه مجاز برای ویدیو 10 مگابایت می باشد";
      } else {
        delete errors.video;
      }
    }
  
    if (!data.title) {
      errors.title = "موضوع را وارد کنید";
    } else {
      delete errors.title;
    }
  
    return errors;
  }
  
  export default isValidVideo;
  