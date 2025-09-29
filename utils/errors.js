const BAD_REQUEST = 400;
// message: "Invalid request",

const NOT_FOUND = 404;
// message: "Resource not found",

const INTERNAL_SERVER_ERROR = 500;
// message: "Something went wrong on the server",

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
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  orFailWithNotFound,
};
