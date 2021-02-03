import _ from 'lodash';

const getValidationMessage = (ruleName, fieldName) => {
    const replacer = ':attribute';
    const messages = {
        required: `The :attribute field is required.`,
        email: `The :attribute must be a valid email address.`,
        min: `The :attribute must be at least :min characters.`,
        max: `The :attribute may not be greater than :max characters.`,
        confirmed: `The :attribute confirmation does not match.`
    };
    const message = (messages[ruleName]).replace(replacer, fieldName);
    return message;
}

const validateField = (rules, fieldValue, fieldName, fields) => {        
    const errors = [];
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const ruleName = rule.name;
        switch(rule.name) {
            case "required":
                if (fieldValue.length === 0) {
                    const message = getValidationMessage(ruleName, fieldName);
                    errors.push(message);
                }
                break;
            case "email":
                //regular expression for email validation
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(fieldValue)) {
                    const message = getValidationMessage(ruleName, fieldName);
                    errors.push(message);
                }
                break;
            case "min":
                const min = rule.min;
                if (fieldValue.length < min) {
                    let message = getValidationMessage(ruleName, fieldName);
                    message = message.replace(':min', min);
                    errors.push(message);
                }
                break;
            case "max":
                const max = rule.max;
                if (fieldValue.length > max) {
                    let message = getValidationMessage(ruleName, fieldName);
                    message = message.replace(':max', max);
                    errors.push(message);
                }
                break;
            case "confirmed":
                const matchFieldName = fieldName + '_confirmation';
                let isConfirmed = false;
                if (_.has(fields, matchFieldName)) {
                    isConfirmed = fields[matchFieldName] === fieldValue;
                }
                if (!isConfirmed) {
                    const message = getValidationMessage(ruleName, fieldName);
                    errors.push(message);
                }
                break;
            default:
        }
    }
    return errors;
}

export const validateForm = (rules, data, touched = {}, isSubmitClicked = false) => {
    const validationRules = { ...rules };
    const validateUntouched = Object.keys(touched).length === 0 ? true : false;

    if (!validateUntouched && !isSubmitClicked) {
        for (const touchedName in touched) {
            if (!touched[touchedName]) {
                delete validationRules[touchedName];
            }
        }
    }
    return validateFields(validationRules, data);
}

const validateFields = (rules, data) => {
    const errors = {};
    for (const field in data) {
        if (field in rules) {
            const fieldErrors = validateField(rules[field], data[field], field, data);
            if (fieldErrors.length > 0) {
                errors[field] = fieldErrors;
            }
        }
    }

    return errors;
}