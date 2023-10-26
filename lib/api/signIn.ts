import { ErrorType, post } from "./apiBase";

export interface ProfileType {
  name: string;
  profilePicture: string;
}

interface AuthResponse {
  data: ProfileType | ErrorType;
}

type SignIn = (arg0: string) => Promise<ProfileType>;

export const signIn: SignIn = async (authCode) => {
  try {
    const response: AuthResponse = await post<AuthResponse>("/auth", {
      authCode,
    });

    if ("error" in response.data) {
      throw new Error("Failed to authenticate.");
    }

    return response.data as ProfileType;
  } catch (error) {
    throw new Error("Failed to communicate with API");
  }
};
