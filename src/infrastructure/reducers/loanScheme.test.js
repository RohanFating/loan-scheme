import loanScheme from "./loanScheme";
import actionTypes from "../../constants/actionTypes";

export const DUMMY_CAR_RESULTS = {
"searchResults": [
    {
    "stockReference": "ARNHR-U-20709",
    "url": "/used-cars/fiat/panda/1-2-pop-5dr/2015/ref/arnhr-u-20709",
    "enquiryUrl": "/contact-us/vehicle-enquiry/ARNHR-U-20709",
    "isReserved": false,
    "isAvailableSoon": false,
    "isAwaitingImages": false,
    "title": {
        "name": "2015 (15) Fiat Panda",
        "variant": "1.2 Pop 5dr"
    },
    "photos": [
        
    ],
    "thumbnails": [
        
    ],
    "imageCount": 0,
    "branch": {
        "name": "Linwood Hyundai / Kia",
        "url": "/find-a-dealer/linwood-hyundai-kia/ref/arnhr",
        "distance": null,
        "merchantId": "",
        "providerId": ""
    },
    "make": "Fiat",
    "model": "Panda",
    "citnowVideo": null,
    "salesInfo": {
        "pricing": {
        "cashPricePrefix": "Only",
        "cashPrice": 4998,
        "monthlyPayment": 94.13,
        "deposit": 300.0,
        "financeHeading": "Representative finance example"
        },
        "summary": [
        "13,385 miles",
        "Used",
        "54.3 MPG",
        "Hatchback",
        "Road tax £30",
        "Petrol",
        "Red"
        ],
        "highlightedFeature": null
    }
    }
],
};

describe('loanScheme should', () => {

    it('return carResults', () => {
        expect(loanScheme({}, {
            type: actionTypes.GET_CAR_DETAILS_SUCCESS,
            payload: { results: DUMMY_CAR_RESULTS, price: 5000 }
        }).carResults.length).toBe(1);
    });
    it('return empty carResults', () => {
        expect(loanScheme({}, {
            payload: { results: DUMMY_CAR_RESULTS, price: 5000 }
        }).carResults).not.toBeDefined();
    });
});