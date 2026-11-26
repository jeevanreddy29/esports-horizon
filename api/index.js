let app;
let initError = null;

try {
  app = require('../backend/server');
} catch (err) {
  initError = err;
  console.error("Vercel Serverless Function Init Error:", err);
}

module.exports = (req, res) => {
  if (initError) {
    return res.status(500).json({
      error: "Backend Serverless Init Failure",
      message: initError.message,
      stack: initError.stack
    });
  }

  try {
    return app(req, res);
  } catch (runErr) {
    console.error("Vercel Serverless Execution Error:", runErr);
    return res.status(500).json({
      error: "Server Execution Failure",
      message: runErr.message
    });
  }
};
