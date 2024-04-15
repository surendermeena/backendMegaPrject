const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, nex);
//   } catch (error) {
//     res.status(err.code || 500);
//     console.log("DB Call error", error).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
