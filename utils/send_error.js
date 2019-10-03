module.exports = function(res, error) {
  let errorMsg;

  if (typeof error == "string") {
    console.log(typeof error);
    errorMsg = error;
  } else {
    errorMsg = error.message;
  }

  return res.status(400).json({
    message: errorMsg,
    status: false
  });
};
