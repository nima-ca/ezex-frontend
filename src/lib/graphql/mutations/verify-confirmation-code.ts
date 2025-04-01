import { gql } from "graphql-request";

export const VERIFY_CONFIRMATION_CODE = gql`
    mutation VerifyConfirmationCode($input: VerifyConfirmationCodeInput!) {
        verifyConfirmationCode(input: $input) {
            errorCode
            message
        }
    }
`;
