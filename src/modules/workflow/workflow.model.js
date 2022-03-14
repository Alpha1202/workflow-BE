import { workflow } from "../../db/connection";

export const saveWorkflow = async (payload) => {
  try {
    const savedWorkflow = await workflow.updateOne(
      { _id: payload._id },
      { $set: payload }
    );
    if (savedWorkflow) {
      return { savedWorkflow, successful: true };
    } else {
      return { error, successful: false };
    }
  } catch (error) {
    console.log(error);
    return { error: error || "Something went wrong", successful: false };
  }
};

export const getWorkflow = async () => {
  try {
    const foundWorkflow = await workflow.find().toArray();
    return { foundWorkflow, successful: true };
  } catch (error) {
    console.log(error);
    return { error, successful: false };
  }
};