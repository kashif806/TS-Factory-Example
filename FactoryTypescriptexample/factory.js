"use strict";
exports.__esModule = true;
var hero_1 = require("./hero");
var villain_1 = require("./villain");
var SuperHeroFactory = /** @class */ (function () {
    function SuperHeroFactory() {
    }
    SuperHeroFactory.prototype.createSuperHero = function (heroOptions) {
        if (heroOptions.type === "hero") {
            var hero = new hero_1.Hero(heroOptions.name, heroOptions.health);
            return hero;
        }
        else if (heroOptions.type === "villain") {
            var villain = new villain_1.Villain(heroOptions.name, heroOptions.health);
            return villain;
        }
        else {
            throw new Error('Select either a Hero or a Villain');
        }
    };
    return SuperHeroFactory;
}());
exports.SuperHeroFactory = SuperHeroFactory;
