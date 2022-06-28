function HttpResponse(code,value) {
    return  {
        "statusCode": code,
        "headers": {
            "my_header": value
        },
        "body": JSON.stringify({"A":"SUCCESSFULLY"}),
        "isBase64Encoded": false
    };
}