import { Router } from "express";
import { addQuestion, deleteQuestion, getAllQuestions, getAllQuestionsByUser, getOneQuestion, updateQuestion } from "../Controllers/questionsController";
  import { verifyToken } from "../middleware/verifyToken";
const questionsRoutes = Router()

questionsRoutes.post('',verifyToken,addQuestion)
questionsRoutes.get('',verifyToken,getAllQuestions)
questionsRoutes.get('/:uid',verifyToken,getAllQuestionsByUser)
questionsRoutes.get('/question/:qid',verifyToken,getOneQuestion)
questionsRoutes.put('/question/:id',verifyToken,updateQuestion)
questionsRoutes.delete('/delete/:id',verifyToken,deleteQuestion)
export default questionsRoutes