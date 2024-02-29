const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema({
  ticket_id: Number,
  subject: String,
  assigned: String,
  date: String,
  status: String,
  requirements: String,
  description: String,
});

const TicketModel = mongoose.model("ticket", ticketSchema);

module.exports = { TicketModel };
