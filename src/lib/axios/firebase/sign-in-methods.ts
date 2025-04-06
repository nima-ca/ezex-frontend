import { auth } from "@/config/firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";

export interface SignInMethodsAPIBody {
    email: string;
}

export type SignInMethodsAPIResponse = string[];

export const signInMethodsAPI = async ({
    email,
}: SignInMethodsAPIBody): Promise<SignInMethodsAPIResponse> => {
    return await fetchSignInMethodsForEmail(auth, email);
};
