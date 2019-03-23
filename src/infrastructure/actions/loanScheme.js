import { rsaaAction } from "./rssaAction";
import appConfig from "../../constants/appConfig";
import requestMethod from "../../constants/requestMethod";
import actionTypes from "../../constants/actionTypes";
import { formValueSelector } from "redux-form";
import formNames from "../../constants/formNames";
import { getJSON } from "redux-api-middleware";

export const getCarDetails =() => {
    const rsaAction =  rsaaAction({
        endpoint: appConfig.PROXY +  appConfig.API_URL,
        method: requestMethod.METHOD_GET,
        headers: { 'Content-Type': 'application/json' },
        types: [
            { type: actionTypes.GET_CAR_DETAILS_REQUEST, meta: { loading: true} },
            {type: actionTypes.GET_CAR_DETAILS_SUCCESS,
            meta: { loading: false},
            payload: (_action, state, res) => getJSON(res).then((json) => {
                const selector = formValueSelector(formNames.LOAN_SCHEME_FORM)
                res.json = json
                return {
                    price: selector(state, 'price'),
                    results: json,
                };
            })
            },
            { type: actionTypes.GET_CAR_DETAILS_FAILED, meta: { loading: true} }
        ],
    });
    return rsaAction;
}