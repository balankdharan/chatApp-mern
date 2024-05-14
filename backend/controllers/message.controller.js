export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id } = req.params;
    console.log("send");
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ error: "server error" });
  }
};
