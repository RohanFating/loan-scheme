import {LoanSchemeValidator} from './LoanSchemeValidator';

describe('LoanSchemeValidator validator should', () => {

    it('returns error if all fields are empty', () => {
        const validation = LoanSchemeValidator({});
        expect(validation.price).toBeDefined();
        expect(validation.delivery_date).toBeDefined();
        expect(validation.deposit).toBeDefined();
        expect(validation.forYears).toBeDefined();
    });

    it('not returns error if all fields are correct', () => {
        const validation = LoanSchemeValidator({
            price: 5000,
            deposit: 800,
            delivery_date: '12/04/2019',
            forYears: 3,
        });
        expect(validation.price).not.toBeDefined();
        expect(validation.delivery_date).not.toBeDefined();
        expect(validation.deposit).not.toBeDefined();
        expect(validation.forYears).not.toBeDefined();
    });
});