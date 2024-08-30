
async function searchAPI(searchTerm) {
    return {
        searchTerm: searchTerm,
        itemIds: [111, 222, 333]
    };
}

async function productDetailsAPI(id) {
    const mockProducts = {
        111: {
            id: 111,
            name: "Modern Chair",
            options: [
                { id: 4, name: "Blue", price: 123.0 },
                { id: 5, name: "Red", price: 154.0 }
            ]
        },
        222: {
            id: 222,
            name: "Modern Table",
            options: [
                { id: 6, name: "Wood", price: 1223.0 },
                { id: 7, name: "Metal", price: 2154.0 }
            ]
        },
        333: {
            id: 333,
            name: "Modern Couch",
            options: [
                { id: 8, name: "Fuzzy", price: 892.0 },
                { id: 9, name: "Leather", price: 1054.0 }
            ]
        }
    };
    return mockProducts[id] || null;
}

export { searchAPI, productDetailsAPI };
