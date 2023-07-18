class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // call in the parent constructor

    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // test for this property... other errors can still occurs:

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
