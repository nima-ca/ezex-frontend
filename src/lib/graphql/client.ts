import { toSafeString } from "@/utils/stringUtils/stringUtils";
import { GraphQLClient } from "graphql-request";

const GQL_BASE_URL =
    toSafeString(process.env.NEXT_PUBLIC_GATEWAY_API_BASE_URL) + "/query";
const gqlClient = new GraphQLClient(GQL_BASE_URL);

export default gqlClient;
