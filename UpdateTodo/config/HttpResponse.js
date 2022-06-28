function HttpResponse(code,value) {
    console.log("CALLED");
    return  {
        "statusCode": code,
        "headers": {
            "my_header": value
        },
        "body": JSON.stringify({"A":"SUCCESSFULLY"}),
        "isBase64Encoded": false
    };
}

module.exports =
    {
        HttpResponse
    };