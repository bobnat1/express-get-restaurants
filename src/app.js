const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

app.use(express.json());

app.use(express.urlencoded());

app.get("/restaurant", async (req, res) => {
    let restaurants = await Restaurant.findAll();
    res.json(restaurants);
})

app.get("/restaurant/:id", async (req, res) => {
    let restaurantId = await Restaurant.findByPk(req.params.id)
    res.json(restaurantId);
})

app.post("/restaurant", async (req, res) => {
    let restaurant = await Restaurant.create(req.body);
    console.log(`${restaurant.name} has been added to the database`)
    res.json(restaurant);
})

app.put("/restaurant/:id", async (req, res) => {
    let restaurant = await Restaurant.findByPk(req.params.id);
    let updatedRes = await restaurant.update(req.body);
    res.json(updatedRes);
})

app.delete("/restaurant/:id", async (req, res) => {
    let restaurant = await Restaurant.findByPk(req.params.id);
    let deletedRes = await restaurant.destroy();

    res.json(deletedRes);
})

module.exports = app;