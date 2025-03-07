import axiosInstance from "@services/base-connection";

interface ApiResponse<T> {
  data: T;
}

const get = async <T>(url: string): Promise<ApiResponse<T> | string> => {
  try {
    const { data } = await axiosInstance.get<ApiResponse<T>>(encodeURI(url), {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    return data;
  } catch (error) {
    return error instanceof Error ? error.message : "An error occurred";
  }
};

export default get;
