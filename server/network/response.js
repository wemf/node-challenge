exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        result: message
    });
}

exports.error = function (req, res, message, status, details) {
    console.log('[response error] ' + details);
    res.status(status || 500).send({
        error: message,
        result: details
    });
}