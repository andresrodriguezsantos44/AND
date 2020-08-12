let arrayData = [];
exports.create = (req) => {
    req.body.id = arrayData.length + 1;
    arrayData.push(req.body);
    return req.body;
};
exports.index = () => {
    return arrayData;
}

exports.update = (req) => {
    req.body.id = arrayData[(Number(req.params.id) - 1)].id
    arrayData[(Number(req.params.id) - 1)] = req.body
    return arrayData;
}

exports.delete = (req) => {
    delete arrayData[req.params.id - 1]
    return arrayData;
}

exports.deleteAll = (req) => {
    arrayData = []
    return arrayData;
}
