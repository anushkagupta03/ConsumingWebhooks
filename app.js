const express = require("express")
const bodyParser = require("body-parser")

// Initialize express and define a port
const app = express()
const PORT =80

// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json())

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

// Creating route for webhook
app.use(bodyParser.json())

app.post("/webhooks", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})