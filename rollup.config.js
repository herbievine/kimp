import Production from './config/rollup.prod';
import Default from './config/rollup.default'

const production = true;

export default production ? Production : Default;