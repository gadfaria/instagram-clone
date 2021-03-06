import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

/*
  body-parser: Parse incoming request bodies in a middleware before your handlers, 
  available under the req.body property.
*/

const routeFiles = fs
  .readdirSync(__dirname + "/../routes/")
  .filter((file) => file.endsWith(".js"));

let server;
let routes = [];

const expressService = {
  init: async () => {
    try {
      /*
        Loading routes automatically
      */
      for (const file of routeFiles) {
        const route = await import(`../routes/${file}`);
        const routeName = Object.keys(route)[0];
        routes.push(route[routeName]);
      }

      server = express();

      /* 
        CORS
      */
      server.use(function (req, res, next) {
        // res.setHeader("Access-Control-Allow-Origin", "*");
        // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET,HEAD,OPTIONS,POST,PUT"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
        );

        next();
      });

      server.use(bodyParser.json({ limit: "50mb" }));
      server.use(routes);

      server.listen(process.env.SERVER_PORT);
      console.log("[EXPRESS] Express initialized");
    } catch (error) {
      console.log("[EXPRESS] Error during express service initialization");
      throw error;
    }
  },
};

export default expressService;
