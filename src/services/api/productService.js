const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Import mock data
import productsData from '../mockData/products.json';

class ProductService {
  constructor() {
    this.data = [...productsData];
  }

  async getAll() {  
    await delay(300);
    return [...this.data];
  }

  async getById(id) {
    await delay(200);
    const item = this.data.find(product => product.id === id);
    return item ? { ...item } : null;
  }

  async create(productData) {
    await delay(400);
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    this.data.push(newProduct);
    return { ...newProduct };
  }

  async update(id, updateData) {
    await delay(350);
    const index = this.data.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    this.data[index] = { 
      ...this.data[index], 
      ...updateData,
      updatedAt: new Date().toISOString()
    };
    return { ...this.data[index] };
  }

  async delete(id) {
    await delay(250);
    const index = this.data.findIndex(product => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    const deleted = this.data.splice(index, 1)[0];
    return { ...deleted };
  }

  async getByCategory(category) {
    await delay(200);
    return this.data
      .filter(product => product.category === category)
      .map(product => ({ ...product }));
  }
}

export default new ProductService();