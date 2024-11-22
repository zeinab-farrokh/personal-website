function replyValidation(data) {
  const errors = {};

  if (!data.reply) {
    errors.reply = "متن را وارد کنید";
  } else {
    delete errors.reply;
  }

  return errors;
}

export default replyValidation;
