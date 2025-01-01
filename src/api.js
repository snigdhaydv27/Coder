import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

/**
 * Executes the given code in the specified language using the Piston API.
 *
 * @param {string} language - The programming language to execute (e.g., "python", "javascript").
 * @param {string} sourceCode - The source code to execute.
 * @returns {Promise<object>} The API response containing the execution result.
 */
export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
};
