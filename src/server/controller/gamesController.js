const tictactoe = (req, res) => {
    res.render('pages/games/tictactoe');
}

const index = (req, res) => {
    res.render('pages/games/games');
}

export default {
    tictactoe,
    index
}
