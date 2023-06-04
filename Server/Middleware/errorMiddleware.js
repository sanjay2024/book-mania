
const notfoundErrorMiddleware = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorMiddlewareHandler = (err, req, res, next) => {
  //Set your status code
  const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
  //set status code
  res.status(errorStatusCode);
  res.json({
    message: err.message
  });
};

module.exports = { errorMiddlewareHandler, notfoundErrorMiddleware };
