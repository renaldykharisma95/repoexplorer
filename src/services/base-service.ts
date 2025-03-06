import axiosInstance from "./base-connection";

const get = async (url: string) => {
  try {
    const response = await axiosInstance.get(encodeURI(url), {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return error || "An error occurred";
  }
};

export default get;
