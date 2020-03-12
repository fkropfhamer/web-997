const about = (req, res) => {
    res.render('about');
}

const index = (req, res) => {
    res.render('index');
}

export default {
    about,
    index
}