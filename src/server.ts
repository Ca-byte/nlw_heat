import { serverHttp } from "./app";

serverHttp.listen(4000, () =>
  console.log(`:heart Server is running on Port 4000`)
);
