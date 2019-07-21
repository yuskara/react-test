import react from "react";

export const randomId = () =>
  Math.random()
    .toString(32)
    .substr(2, 10);

export default randomId;
