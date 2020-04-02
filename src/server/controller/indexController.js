const about = (req, res) => {
    res.render('pages/about');
}

const index = (req, res) => {
    res.render('pages/index');
}

export default {
    about,
    index
}
