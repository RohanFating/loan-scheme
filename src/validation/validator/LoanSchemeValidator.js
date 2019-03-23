import { isRequired, validateType } from "../index";
import { default as validateMessages } from '../validationMessages';
import validationTypes from "../../constants/validationTypes";
const MIN_DEPOSIT_PERCENTAGE = 0.15;

export const LoanSchemeValidator = (values) => {
    const errors = {};
    errors.price = validateType(validationTypes.NUMBER, values.price, validateMessages.numberField);
    errors.deposit = validateType(validationTypes.NUMBER, values.deposit, validateMessages.depositFieldMessage);
    
    errors.delivery_date= isRequired(values.delivery_date, validateMessages.dateField);
    if(!errors.deposit) {
        const deposit = parseFloat(values.deposit);
        const price = parseFloat(values.price);
        errors.deposit =  deposit < price*MIN_DEPOSIT_PERCENTAGE || deposit >price
            ? validateMessages.depositFieldMessage : undefined;
    }
    errors.forYears= isRequired(values.forYears, validateMessages.provideInput);
    
    return errors;
}