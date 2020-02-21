import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import { initMapbox } from '../plugins/init_mapbox';
import { initMapToggler } from '../packs/game_sessions/index';
import { turnEffect } from '../components/turneffect';
initMapbox();
initMapToggler();
turnEffect();
