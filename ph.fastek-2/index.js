// index.js

import { performProductSearch } from './productSearchService.js';

// Example usage
performProductSearch('modern').then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
