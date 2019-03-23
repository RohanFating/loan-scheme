import ROUTES from '../routes/routeConfig';
const BACK_BEHAVIOUR = "backBehaviour";

export const navigateToNextPage = ({ history }) => {
    const nextPage = getPage({});
    if(history && nextPage) {
        history.push(nextPage);
    }
};

export const navigateToPage = ({ history, nextPage}) => {
    if(history) {
        history.push(nextPage);
    }
};

export const goBack = ({ history }) => {
    const nextPage = getPage({ type: BACK_BEHAVIOUR });
    if(history && nextPage) {
        history.push(nextPage);
    }
};

const getPage = ({ type= 'nextPath', currentPage =  window.location.pathname }) => {
    const page = ROUTES.find( route => route.path === currentPage);
    return page && page[type] ? page[type] : '';
};