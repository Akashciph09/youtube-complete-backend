const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//If you remove return, nothing gets passed to Express.

// const asyncHandler = () => {}
// const asynHandler =(func) =>{ () => {} }      //higher order functiuon in js

// const asyncHandler = (func) => async() => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

//This is a wrapper for any async function (like your registerUser) to handle errors automatically by passing them to Express’s error handler via next().
