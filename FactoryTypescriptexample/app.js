"use strict";
exports.__esModule = true;
var factory_1 = require("./factory");
var superheroFactory = new factory_1.SuperHeroFactory();
var thor = superheroFactory.createSuperHero({ name: 'Thor', type: "hero" });
var loki = superheroFactory.createSuperHero({ name: 'Loki', health: 50, type: "villain" });
thor.attacked(40); // Hero attacked: 40 -- 60
loki.attacked(40); // Villain attacked: 40 -- 10
