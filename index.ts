import http, { ServerResponse } from "http";
import data from "./data.json";
const server = http.createServer(
  (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
    res.writeHead((res.statusCode = 200), {
      "content-type": "application/json",
    });

    // const data = req.rawHeaders[7].split('"')[1];
    // const postData = req.rawHeaders[4].split("-")[0];
    // console.log();

    // if (data === undefined) {
    //   res.write(`You are using "${postData}" to access me!`);
    // } else {
    //   res.write(`You are using "${data}" to access me!`);
    // }

    // res.end();

    const { method, url } = req;
    if (method === "GET" && url === "/home") {
      console.log(data);
      res.write(Buffer.from(JSON.stringify(data)));
      res.end();
    } else {
      res.end();
    }
  },
);

server.on("connection", () => {
  console.log("A user connected");
});

server.listen(3322, () => {
  console.log("");
  console.log("server is now live...!");
});
