const BASE_URL = "http://localhost:3001/api/";

const fetcher = async (url: string): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "mocked data", url });
    }, 500);
  });
};

const useApi = () => {
  const api = async (path: string) => {
    try {
      const response = await fetcher(`${BASE_URL}${path}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    api,
  };
};

export { useApi };
