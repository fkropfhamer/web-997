const mnist = (req, res) => {
    res.render('pages/mnist');
}

const index = (req, res) => {
    res.render('pages/ml');
}

export default {
    mnist,
    index
}