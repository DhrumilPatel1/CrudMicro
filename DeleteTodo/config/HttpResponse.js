function HttpResponse(statusCode,responseBody) {
    return {
            statusCode : statusCode,
            headers :
                {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "DELETE, GET, OPTIONS, POST, PUT",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            body : JSON.stringify(responseBody),
            isBase64Encoded : false,
        }   
}