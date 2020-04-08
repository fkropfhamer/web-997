const about = (req, res) => {
    res.render('pages/index/about');
}

const index = (req, res) => {
    res.render('pages/index/index');
}

export default {
    about,
    index
}