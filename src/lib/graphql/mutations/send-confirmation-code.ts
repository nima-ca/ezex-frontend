import { gql } from "graphql-request";
import gqlClient from "../client";

export const SEND_CONFIRMATION_CODE = gql`
    mutation SendConfirmationCode($input: SendConfirmationCodeInput!) {
        sendConfirmationCode(input: $input) {
            ok
        }
    }
`;

export enum DeliveryMethod {
    EMAIL = "EMAIL",
}

export interface SendConfirmationCodeAPIBody {
    method: DeliveryMethod;
    recipient: string;
}

export const sendConfirmationCodeAPI = async (
    body: SendConfirmationCodeAPIBody,
) => {
    return gqlClient.request(SEND_CONFIRMATION_CODE, { input: body });
};
