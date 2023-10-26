import { ErrorType, post } from "./apiBase";

interface Profile {
  name: string;
  profilePicture: string;
}

interface AuthResponse {
  data: Profile | ErrorType;
}

export const getUserProfile = async (authCode: string) => {
  try {
    const response: AuthResponse = await post<AuthResponse>("/auth", {
      authCode,
    });

    if ("error" in response.data) {
      throw new Error("Failed to authenticate.");
    }

    return response.data as Profile;
  } catch (error) {
    throw new Error("Failed to communicate with API");
  }
};
