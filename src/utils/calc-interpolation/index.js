export default (minScreen, minValue, maxScreen, maxValue, unit) => {
    const a = (maxValue - minValue) / (maxScreen - minScreen);
    const b = minValue - a * minScreen;

    const sign = "+";
    if (b < 0) {
        sign: "-";
        b: Math.abs(b);
    }
    return `calc(${a * 100}vw ${sign} ${b}${unit})`;
}