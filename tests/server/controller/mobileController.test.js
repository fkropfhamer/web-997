import mobileController from '../../../src/server/controller/mobileController';

describe('mobileController test', () => {
    it('returns the right view for index', () => {
        const mockResponse = { render: jest.fn() };

        mobileController.index({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/index-mobile');
    });
})
