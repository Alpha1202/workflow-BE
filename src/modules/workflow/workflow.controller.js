import { getWorkflow } from "./workflow.model";
import {
  handleErrorResponse,
  handleSuccessResponse,
} from "../../helpers/utils";

export const FetchWorkflow = async (req, res) => {
  try {
    const { foundWorkflow, successful, error } = await getWorkflow();
    if (successful) {
      handleSuccessResponse(res, foundWorkflow, 200);
    } else {
      handleErrorResponse(res, error, 404);
    }
  } catch (error) {
    console.log(error);
    handleErrorResponse(res, error, 500);
  }
};

export const SaveWorkflow = async (req, res) => {
	try {
		const { successful, error, savedWorkflow } = await saveWorkflow(req.body);
		if (successful) {
			handleSuccessResponse(res, savedWorkflow, 200);
		} else {
			handleErrorResponse(res, error, 400);
		}
	} catch (error) {
		handleErrorResponse(res, error, 500);
	}
};