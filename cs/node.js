
______________________________________
// ------MIDDLEWARE SYNTAX--------

const middleware = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){ return res.status(401).json({message: "Unauthorized"});}
        const decodedToken = jwt.verify(token, "secret");
        req.user = decodedToken;
        next();
    } catch (err){
        res.status(500).json({message: "Internal server error"});
    }
}

app.use(middleware);






______________________________________
// -------JWT------------

const makeToken = (req, res, next) => {
    const token = jwt.sign({ id: email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie("token", token, { httpOnly: true, secure: true, maxAge: 24 * 60 * 60 * 1000 });
    next();
}

