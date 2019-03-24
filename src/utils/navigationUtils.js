import ROUTES from '../routes/routeConfig';
const BACK_BEHAVIOUR = "backBehaviour";

/**
 * Navigate to next page
 * @param {object} history 
 */
export const navigateToNextPage = ({ history }) => {
    const nextPage = getPage({});
    if(history && nextPage) {
        history.push(nextPage);
    }
};

/**
 * Navigate to previous page
 * @param {object} history 
 */
export const goBack = ({ history }) => {
    const nextPage = getPage({ type: BACK_BEHAVIOUR });
    if(history && nextPage) {
        history.push(nextPage);
    }
};

/**
 * Return page 
 * @param {object} history 
 */
const getPage = ({ type= 'nextPath', currentPage =  window.location.pathname }) => {
    const page = ROUTES.find( route => route.path === currentPage);
    return page && page[type] ? page[type] : '';
};