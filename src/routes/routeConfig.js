import routeUrls from "../constants/routeUrls";
import LoanSchemeContainer from "../containers/LoanSchemeContainer";
import PaymentScheduleContainer from "../containers/PaymentScheduleContainer";
import CarResultsContainer from "../containers/CarResultsContainer";

const ROUTES = [{
component: LoanSchemeContainer,
path: routeUrls.LOAN_SCHEME,
nextPath: routeUrls.PAYMENT_SCHEDULE,
backBehaviour: null,
}, {
component: PaymentScheduleContainer,
path: routeUrls.PAYMENT_SCHEDULE,
nextPath: routeUrls.CAR_RESULTS,
backBehaviour: routeUrls.LOAN_SCHEME,
}, {
    component: CarResultsContainer,
    path: routeUrls.CAR_RESULTS,
    nextPath: "",
    backBehaviour: routeUrls.PAYMENT_SCHEDULE,
}];

export default ROUTES;