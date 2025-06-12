const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Import mock data
import contactData from '../mockData/contacts.json';

class ContactService {
  constructor() {
    this.data = [...contactData];
  }

  async getAll() {
    await delay(300);
    return [...this.data];
  }

  async getById(id) {
    await delay(200);
    const item = this.data.find(contact => contact.id === id);
    return item ? { ...item } : null;
  }

  async create(contactData) {
    await delay(400);
    const newContact = {
      ...contactData,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString()
    };
    this.data.push(newContact);
    return { ...newContact };
  }

  async update(id, updateData) {
    await delay(350);
    const index = this.data.findIndex(contact => contact.id === id);
    if (index === -1) {
      throw new Error('Contact not found');
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
    const index = this.data.findIndex(contact => contact.id === id);
    if (index === -1) {
      throw new Error('Contact not found');
    }
    
    const deleted = this.data.splice(index, 1)[0];
    return { ...deleted };
  }
}

export default new ContactService();