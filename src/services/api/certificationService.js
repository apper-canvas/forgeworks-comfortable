const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Import mock data
import certificationsData from '../mockData/certifications.json';

class CertificationService {
  constructor() {
    this.data = [...certificationsData];
  }

  async getAll() {
    await delay(300);
    return [...this.data];
  }

  async getById(id) {
    await delay(200);
    const item = this.data.find(cert => cert.id === id);
    return item ? { ...item } : null;
  }

  async create(certData) {
    await delay(400);
    const newCert = {
      ...certData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    this.data.push(newCert);
    return { ...newCert };
  }

  async update(id, updateData) {
    await delay(350);
    const index = this.data.findIndex(cert => cert.id === id);
    if (index === -1) {
      throw new Error('Certification not found');
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
    const index = this.data.findIndex(cert => cert.id === id);
    if (index === -1) {
      throw new Error('Certification not found');
    }
    
    const deleted = this.data.splice(index, 1)[0];
    return { ...deleted };
  }
}

export default new CertificationService();