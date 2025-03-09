import axiosInstance from "@services/base-connection";

export interface ApiResponse<T> {
  data: T;
}

export interface ErrorResponse {
  message: string;
  documentation_url?: string;
  status?: string;
}

const get = async <T>(url: string): Promise<T | ErrorResponse> => {
  console.log("asddd dfdfgdg: ");

  try {
    const response = await axiosInstance.get<ApiResponse<T>>(encodeURI(url), {
      headers: {
        Authorization: `token ${import.meta.env.VITE_API_TOKEN}`,
      },
    });
    return response.data as T;
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An error occurred",
      status: "error",
    };
  }
};

export default get;
