function stringLength(string) {
    if (string.length < 1) return 'Imposible to evaluate length';
    if (string.length > 10) return 'To long to evaluate for this test';
    return string.length;
    /* console.log(string.length); */
}
/* stringLength('lllllllllluuuuuuuu'); */

function reverseString(string) {
    const result = [...string].reverse().join('');
    return result
}

export { stringLength, reverseString };

/* para activar BABEL 

***npm install --save-dev babel-jest @babel/core @babel/preset-env***  EN CONSOLA 

CREAR EN RAIZ ARCHIVO babel.config.js y colocar adentro:

module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  }; */