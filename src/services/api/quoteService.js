const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Import mock data
import quotesData from '../mockData/quotes.json';

class QuoteService {
  constructor() {
    this.data = [...quotesData];
  }

  async getAll() {
    await delay(300);
    return [...this.data];
  }

  async getById(id) {
    await delay(200);
    const item = this.data.find(quote => quote.id === id);
    return item ? { ...item } : null;
  }

  async create(quoteData) {
    await delay(500);
    const newQuote = {
      ...quoteData,
      id: Date.now().toString(),
      status: 'pending',
      submittedAt: new Date().toISOString()
    };
    this.data.push(newQuote);
    return { ...newQuote };
  }

  async update(id, updateData) {
    await delay(350);
    const index = this.data.findIndex(quote => quote.id === id);
    if (index === -1) {
      throw new Error('Quote not found');
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
    const index = this.data.findIndex(quote => quote.id === id);
    if (index === -1) {
      throw new Error('Quote not found');
    }
    
    const deleted = this.data.splice(index, 1)[0];
    return { ...deleted };
  }

  async getByStatus(status) {
    await delay(200);
    return this.data
      .filter(quote => quote.status === status)
      .map(quote => ({ ...quote }));
  }
}

export default new QuoteService();