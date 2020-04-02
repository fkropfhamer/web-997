const mnist = (req, res) => {
    res.render('pages/ml/mnist');
}

const index = (req, res) => {
    res.render('pages/ml/ml');
}

export default {
    mnist,
    index
}