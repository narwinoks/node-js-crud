const logRequest = (req, res, next) => {
  console.log(`middleware 2 ${req.path}`);
  next();
};

module.exports = logRequest;
