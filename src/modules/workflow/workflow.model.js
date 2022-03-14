import { db, workflow } from "../../db/connection";

export const getWorkflow = async () => {
  try {
    const foundWorkflow = await workflow.find().toArray();
    return { foundWorkflow, successful: true };
  } catch (error) {
    console.log(error);
    return { error, successful: false };
  }
};