
import { SuperHeroFactory } from './factory';

const superheroFactory = new SuperHeroFactory();
const thor = superheroFactory.createSuperHero({name: 'Thor', type: "hero"});
const loki = superheroFactory.createSuperHero({name: 'Loki', health: 50, type: "villain"});

thor.attacked(40); // Hero attacked: 40 -- 60
loki.attacked(40); // Villain attacked: 40 -- 10
