import axios from "axios";
import { PostRequest } from "./types";

const token = import.meta.env.VITE_HUBSPOT_TOKEN;

const saveContact = async (
  body: PostRequest
): Promise<{
  success: boolean;
  data?: any;
  error?: {
    status: number;
    message: string;
    category?: string;
  };
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
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      "Ocurrió un error al guardar el contacto.";
    const category = error.response?.data?.category;

    return {
      success: false,
      error: {
        status,
        message,
        category,
      },
    };
  }
};

export default saveContact;
