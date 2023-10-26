const baseURL = process.env.API_BASE_URL;

export interface ErrorType {
  error: string;
}

export async function get(endpoint: string): Promise<T> {
  const response = await fetch(`${baseURL}${endpoint}`);
  return (await response.json()) as T;
}

export async function post<T>(endpoint: string, data?: object): Promise<T> {
  const response = await fetch(`${baseURL}${endpoint}`, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return (await response.json()) as T;
}
