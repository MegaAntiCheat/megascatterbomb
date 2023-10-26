import { create } from "zustand";

import { ProfileType } from "@/lib/api/signIn";

interface AuthState {
  profile: ProfileType | null;
  setProfile: (profile: ProfileType) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));
