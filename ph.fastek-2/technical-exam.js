
const searchApiMock = (searchTerm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          searchTerm: searchTerm,
          itemIds: [111, 222, 333]
        });
      }, 1000);
    });
  };
  
  const productApiMock = (id) => {
    const products = {
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
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products[id] || {});
      }, 1000);
    });
  };
  const transformProductDetails = (product) => {
    if (!product.options || product.options.length === 0) {
      return {
        ...product,
        priceRange: "N/A",
      };
    }
  
    const prices = product.options.map(option => option.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
  
    return {
      ...product,
      priceRange: `$${minPrice.toFixed(2)}-$${maxPrice.toFixed(2)}`
    };
  };
  const performProductSearch = async (searchTerm) => {
    try {
      const searchResults = await searchApiMock(searchTerm);
      const productDetailsPromises = searchResults.itemIds.map(id => productApiMock(id));
      const productDetails = await Promise.all(productDetailsPromises);
      const items = productDetails.map(transformProductDetails);
  
      return {
        meta: {
          searchTerm: searchResults.searchTerm,
          count: items.length
        },
        items: items
      };
    } catch (error) {
      console.error("Error performing product search:", error);
      return {
        meta: {
          searchTerm: searchTerm,
          count: 0
        },
        items: []
      };
    }
  };
  performProductSearch('modern').then(response => {
    console.log(JSON.stringify(response, null, 2));
  });
  