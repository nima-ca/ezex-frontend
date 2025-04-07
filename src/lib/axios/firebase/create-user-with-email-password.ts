import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

export interface CreateUserAPIBody {
    email: string;
    password: string;
}

export const createUserAPI = async ({
    email,
    password,
}: CreateUserAPIBody): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password);
};
