import _ from 'lodash';

import calcInterpolation from '../calc-interpolation'

export default (property, minScreen, maxScreen, minValue, maxValue, unit) => `
    ${property}: ${minValue}${unit};

    @media screen and (min-width: ${minScreen}${unit}) {
        ${property}: ${calcInterpolation(minScreen, minValue, maxScreen, maxValue, unit)};
    }

    @media screen and (min-width: ${maxScreen}${unit}) {
        ${property}: ${maxValue}${unit};
    }
`
