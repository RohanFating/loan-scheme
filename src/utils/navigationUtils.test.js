import { navigateToNextPage } from "./navigationUtils";
import { goBack } from "../../../../loan-scheme/src/utils/navigationUtils";

describe('Navigation util should', () => {

    it('navigate to next page', () => {
        const mockCallBack = jest.fn();
        const history = {
            push: mockCallBack,
        }
        navigateToNextPage({history});
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('should not go back if backBaviour is not present', () => {
        const mockCallBack = jest.fn();
        const history = {
            push: mockCallBack,
        }
        goBack({history});
        expect(mockCallBack.mock.calls.length).toEqual(0);
    });

});