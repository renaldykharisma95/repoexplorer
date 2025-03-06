import axiosInstance from "./base-connection";

export const get = async (url: string) => {
  try {
    const response = await axiosInstance.get(encodeURI(url), {
      headers: { Authorization: `token ` },
    });
    return response; // Return only the data
  } catch (error) {
    return { error: error || "An error occurred" }; // Better error handling
  }
};
