import indexController from '../../../src/server/controller/indexController';

describe('indexController test', () => {
    it('returns the right view for index', () => {
        const mockResponse = { render: jest.fn() };

        indexController.index({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/index');
    });

    it('returns the right view for about', () => {
        const mockResponse = { render: jest.fn() };

        indexController.about({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/about');
    })
});
