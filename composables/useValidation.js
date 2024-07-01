/** input value must be required  **/
export const required = (value, error_message) => {
  if (value) return true;
  return error_message;
};

/** input value must be number  **/
export const number = (value, error_message) => {
  if (/^[0-9]+$/.test(value)) return true;
  return error_message;
};

/** input value email must be valid **/
export const email = (value, error_message) => {
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return true;
  return error_message;
};
