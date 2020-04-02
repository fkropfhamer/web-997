import evolutionController from '../../../src/server/controller/evolutionController';

describe('indexController test', () => {
    it('returns the right view for index', () => {
        const mockResponse = { render: jest.fn() };

        evolutionController.index({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/evolution/evolution');
    });

    it('returns the right view for 8puzzle', () => {
        const mockResponse = { render: jest.fn() };

        evolutionController.eightPuzzle({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/evolution/eight-puzzle');
    });

    it('returns the right view for traveling salesman', () => {
        const mockResponse = { render: jest.fn() };

        evolutionController.travelingSalesman({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/evolution/traveling-salesman');
    });
});