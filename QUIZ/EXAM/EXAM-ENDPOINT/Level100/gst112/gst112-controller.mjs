//

import { answers, data } from "../../../../data/data.mjs";
import { GST112 } from "./gst112-questions-schema.mjs";
import { GST112RESULT } from "./gst112-result-schema.mjs";

// get request

export async function getQuestions(req, res) {
  try {
    const allQuestions = await GST112.find();
    return res.status(200).send(allQuestions);
  } catch (error) {
    return res.status(400).send(error);
  }
}

// post request

export async function postquestions(req, res) {
  const { data, answers } = req.body;
  try {
    const newQuestion = new GST112({
      questions: data,
      answers: answers,
    });
    const savedQuestions = await newQuestion.save();
    res.json(savedQuestions);
  } catch (error) {
    return res.status(401).json(error);
  }
}

// post result

export async function postresult(req, res) {
  const { body } = req;
  try {
    const newResult = new GST112RESULT(body);
    const savedResult = await newResult.save();
    return res.status(201).send(savedResult);
  } catch (error) {
    return res.status(401).send(error);
  }
}
