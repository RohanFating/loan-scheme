import loader from "./loader";

describe('loader reducer', () => {

    it('return loading true', () => {
        expect(loader({}, {
            type: 'test',
            meta: { loading: true }
        }).loading).toBeTruthy();
    });

    it('return loading false', () => {
        expect(loader({}, {
            type: 'test',
            meta: { loading: false }
        }).loading).toBeFalsy();
    });
});