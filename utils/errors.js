const BAD_REQUEST = 400;

const UNAUTHORIZED = 401;

const FORBIDDEN = 403;

const NOT_FOUND = 404;

const CONFLICT = 409;

const INTERNAL_SERVER_ERROR = 500;

function orFailWithNotFound(resourceName = "Resource") {
  return () => {
    const error = new Error(`${resourceName} not found`);
    error.name = "DocumentNotFoundError";
    error.statusCode = NOT_FOUND;
    throw error;
  };
}

module.exports = {
  BAD_REQUEST,
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  orFailWithNotFound,
  CONFLICT,
  UNAUTHORIZED,
};
