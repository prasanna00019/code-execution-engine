import express from "express"
import { getSubmission, submitCode } from "../src/controllers/UserSubmissionController.js";
const UserSubmissionRouter=express.Router();
UserSubmissionRouter.post('/',submitCode);
UserSubmissionRouter.get('/:userId/:probId',getSubmission);
export default UserSubmissionRouter;