import axios from "axios";
import { PostRequest } from "./types";

const token = import.meta.env.VITE_HUBSPOT_TOKEN;

const saveContact = async (
  body: PostRequest
): Promise<{
  success: boolean;
  data?: any;
  error?: string;
}> => {
  try {
    const response = await axios.post(
      "/hubspot/crm/v3/objects/contacts",
      body,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message ||
      "Ocurrió un error al guardar el contacto.";
    return {
      success: false,
      error: errorMessage,
    };
  }
};

export default saveContact;
