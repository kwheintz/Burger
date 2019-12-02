var express = require("express");
const Burger = require("../models/burger");

app = express();

app.get("api/burgers", function(req,res){
    Burger.findAll().then(function(result){
        return res.json(result);
    });
});

app.post("api/new", function(req,res){
    const burger = req.body;
    Burger.create({
        name: burger.name,
    })
});

app.put("api/:id?", function(req,res) {
    Burger.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if(result){
            result.update(
                result.body.devour: 1
            )
        }
        res.json(result)
    }
});