function stringLength(string) {
    if (string.length < 1) return 'Imposible to evaluate length';
    if (string.length > 10) return 'To long to evaluate for this test';
    return string.length;
    /* console.log(string.length); */
}
/* stringLength('lllllllllluuuuuuuu'); */

module.exports = stringLength;
/* export { stringLength }; */