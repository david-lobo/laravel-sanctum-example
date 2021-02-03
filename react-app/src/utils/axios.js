import _ from 'lodash';

export const handleResponse = (response) => {
    let handled = {
        type: 'unknown', // unknown|error|success 
        status: response.status,
        message: null,
        errors: []
    };

    if (_.has(response, 'data.message')) {
        handled.message = response.data.message;
    }

    if (response.status >= 400 && response.status < 512) {
        handled.type = 'error';

        if (response.status === 422) {
            if (_.has(response, 'data.errors')) {
                handled.errors = response.data.errors;
            }
        }
    } else if (response.status >= 200 && response.status < 300) {
        handled.type = 'success';
    }
    
    return handled;
}