import gamesController from '../../../src/server/controller/gamesController';

describe('gamesController test', () => {
    it('returns the right view for index', () => {
        const mockResponse = { render: jest.fn() };

        gamesController.index({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/games/games');
    });

    it('returns the right view for tictactoe', () => {
        const mockResponse = { render: jest.fn() };

        gamesController.tictactoe({}, mockResponse);

        expect(mockResponse.render).toHaveBeenCalled();
        expect(mockResponse.render).toHaveBeenCalledWith('pages/games/tictactoe');
    })
});
