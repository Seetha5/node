const lodash = require('lodash');
const items = [1, [2, 3, 4],
    [5, 6], 7, 8, 9
];
console.log(lodash.flattenDeep(items));
//flattens the array