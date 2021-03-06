import "regenerator-runtime/runtime.js";
import express from "express";
import cors from "cors";

import { connectToCluster } from "./db/connection";
import { WorkflowRoutes } from "./modules";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const routes = [WorkflowRoutes];

routes.map((route) => app.use("/api/v1", route));

app.all("*", (req, res) =>
	res.status(404).send({
		status: "error",
		message: "you have entered an incorrect route",
	})
);

// setup app's server
app.listen(3000, async () => {
	await connectToCluster();
	console.log(`server connected`);
});
