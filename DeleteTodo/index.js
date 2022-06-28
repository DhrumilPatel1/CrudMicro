module.exports.handler = async (req, res) => {
  try {

    var obj = {
      message: "Todo is Deleted",
    };
    httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Interaaaaaanal Server Error",
    };
    httpResponse(500, obj);
  }
};