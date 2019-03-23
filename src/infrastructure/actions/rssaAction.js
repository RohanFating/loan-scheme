import { RSAA } from "redux-api-middleware";
import requestMethod from "../../constants/requestMethod";

export const rsaaAction = ({endpoint, method = requestMethod.METHOD_GET, types,
    headers={} }) => ({
    [RSAA]: {
        endpoint: endpoint,
        method: method,
        headers: headers,
        types: types,
    }
});