import { gql } from "graphql-request";
import gqlClient from "../client";

export const VERIFY_CONFIRMATION_CODE = gql`
    mutation VerifyConfirmationCode($input: VerifyConfirmationCodeInput!) {
        verifyConfirmationCode(input: $input) {
            ok
        }
    }
`;

export interface VerifyConfirmationCodeAPIBody {
    code: string;
    recipient: string;
}

export const verifyConfirmationCodeAPI = async (
    body: VerifyConfirmationCodeAPIBody,
) => {
    return gqlClient.request(VERIFY_CONFIRMATION_CODE, { input: body });
};
