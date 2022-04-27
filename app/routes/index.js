
const router = require('./base.routes');
const { BadRequestError, errorHandler } = require("../errors");
const jsonwebtoken = require("jsonwebtoken");
const auth = require("../controllers/auth.controller");

function route(app) {
    // midddleware handling auth
    app.use(function(req, res, next) {
      if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
          if (err) req.user = undefined;
          req.user = decode;
          next();
        });
      } else {
        //auth.loginRequired(req,res,next);
        req.user = undefined;
        next();
      }
    });
  
    app.use("/api/shop", router);
    // handle 404 response
    app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    next(new BadRequestError(404, "Resource not found"));
         });
    // define error-handling middleware last, after other app.use() and routes calls
    app.use((err, req, res, next) => {
        // Middleware xử lý lỗi tập trung.
        // Trong các đoạn code xử lý ở các route, gọi next(error)
        // sẽ chuyển về middleware xử lý lỗi này
        next(errorHandler.handleError(err, res));
        });
}

module.exports = route; 