const travelingSalesman = (req, res) => {
    res.render('pages/evolution/traveling-salesman');
}

const eightPuzzle = (req, res) => {
    res.render('pages/evolution/eight-puzzle');
}

const index = (req, res) => {
    res.render('pages/evolution/evolution');
}

export default {
    eightPuzzle,
    travelingSalesman,
    index
}