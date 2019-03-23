const initialFormState = {
    loading: false,
}

/**
 * To handle state of loader
 * @param state - state
 * @param action - action to perform state operation
 */
const loader = ( state=initialFormState, action ) => {
    switch(action.type) {
        default : return { loading:  action.meta &&  action.meta.loading && action.meta.loading};
    }
};

export default loader;