const express=require("express");
const { TicketModel } = require("../models/ticket.model");
const ticketRouter=express.Router();

ticketRouter.get("/", async (req, res) => {
    const query = req.query;
    try {
      const Tickets = await TicketModel.find(query);
      res.status(200).json(Tickets);
    } catch (error) {
      res.status(400).json({ error });
    }
  });
  
  ticketRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const Ticket = await TicketModel.findOne({ _id: id });
      if (!Ticket) {
        res.status(400).json({ msg: "Ticket not found!" });
      }
      res.status(200).json(Ticket);
    } catch (error) {
      res.status(400).json({ error });
    }
  });
  
  ticketRouter.post("/add", async (req, res) => {
    const payload = req.body;
    try {
      const Ticket = new TicketModel(payload);
      await Ticket.save();
      res.status(201).json({ msg: "A new Ticket has been created" });
    } catch (error) {
      res.status(400).json({ error });
    }
  });
  
  ticketRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
      await TicketModel.findByIdAndUpdate({ _id: id }, payload);
      res.status(200).json({ msg: `Ticket with ${id} updated` });
    } catch (error) {
      res.status(400).json({ error });
    }
  });
  
  ticketRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await TicketModel.findByIdAndDelete({ _id: id });
      res.status(200).json({ msg: `Ticket with ${id} deleted` });
    } catch (error) {
      res.status(400).json({ error });
    }
  });

module.exports={ticketRouter};