module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
  // 👆 this allows us to remove the catch block
  // from the async function
};
