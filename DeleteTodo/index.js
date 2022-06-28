module.exports.handler = async (req, res) => {
  try {

    var obj = {
      message: "Todo is Deleted",
    };
   return httpResponse(200, obj);
  } catch (error) {
    obj = {
      message: "Interaaaaaanal Server Error",
    };
  return  httpResponse(500, obj);
  }
};