import mlController from '../../../src/server/controller/mlController';

describe('mlController test', () => {
    it('returns the right view for index', () => {
        const mockResponse = { render: jest.fn() };

        mlController.index({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/ml/ml');
    });

    it('returns the right view for mnist', () => {
        const mockResponse = { render: jest.fn() };

        mlController.mnist({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/ml/mnist');
    })
});
