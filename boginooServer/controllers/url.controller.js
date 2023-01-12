const generate = async(req, res) => {
    const { url } = req.body

    if (!url) {
        return res.status(400).send({
            error: 
        })
    }
}