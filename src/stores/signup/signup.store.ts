import { create } from "zustand";

interface SignupStore {
    verifiedEmail: string | null;
    setVerifiedEmail: (email: string) => void;
}

export const useSignupStore = create<SignupStore>(set => ({
    verifiedEmail: null,
    setVerifiedEmail: email => set({ verifiedEmail: email }),
}));
