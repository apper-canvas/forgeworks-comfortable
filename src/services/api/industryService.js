// Industry service for managing industry data operations
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class IndustryService {
  constructor() {
    // Initialize ApperClient with Project ID and Public Key
    const { ApperClient } = window.ApperSDK;
    this.apperClient = new ApperClient({
      apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
      apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
    });
  }

  async getAll() {
    try {
      await delay(300);
      
      // Use the industry table from the provided Tables & Fields JSON
      const tableName = 'industry';
      
      // Include all fields for display purposes
      const tableFields = [
        'Name', 'Tags', 'Owner', 'CreatedOn', 'CreatedBy', 
        'ModifiedOn', 'ModifiedBy', 'description'
      ];
      
      const params = {
        fields: tableFields,
        orderBy: [
          {
            fieldName: "Name",
            SortType: "ASC"
          }
        ]
      };
      
      const response = await this.apperClient.fetchRecords(tableName, params);
      
      if (!response || !response.data || response.data.length === 0) {
        return [];
      }
      
      return response.data;
    } catch (error) {
      console.error("Error fetching industries:", error);
      throw error;
    }
  }

  async getById(id) {
    try {
      await delay(200);
      
      const tableName = 'industry';
      const tableFields = [
        'Name', 'Tags', 'Owner', 'CreatedOn', 'CreatedBy', 
        'ModifiedOn', 'ModifiedBy', 'description'
      ];
      
      const params = {
        fields: tableFields
      };
      
      const response = await this.apperClient.getRecordById(tableName, id, params);
      
      if (!response || !response.data) {
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error(`Error fetching industry with ID ${id}:`, error);
      throw error;
    }
  }

  async create(industryData) {
    try {
      await delay(400);
      
      const tableName = 'industry';
      
      // Only include updateable fields for create operation
      const updateableData = {
        Name: industryData.Name,
        Tags: industryData.Tags,
        Owner: industryData.Owner,
        description: industryData.description
      };
      
      const params = {
        records: [updateableData]
      };
      
      const response = await this.apperClient.createRecord(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }
      
      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);
        
        if (failedRecords.length > 0) {
          console.error(`Failed to create ${failedRecords.length} records:${failedRecords}`);
          throw new Error('Some records failed to create');
        }
        
        return successfulRecords[0]?.data;
      }
      
      return null;
    } catch (error) {
      console.error("Error creating industry:", error);
      throw error;
    }
  }

  async update(id, industryData) {
    try {
      await delay(400);
      
      const tableName = 'industry';
      
      // Only include updateable fields for update operation
      const updateableData = {
        Id: id,
        Name: industryData.Name,
        Tags: industryData.Tags,
        Owner: industryData.Owner,
        description: industryData.description
      };
      
      const params = {
        records: [updateableData]
      };
      
      const response = await this.apperClient.updateRecord(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }
      
      if (response.results) {
        const successfulUpdates = response.results.filter(result => result.success);
        const failedUpdates = response.results.filter(result => !result.success);
        
        if (failedUpdates.length > 0) {
          console.error(`Failed to update ${failedUpdates.length} records:${failedUpdates}`);
          throw new Error('Some records failed to update');
        }
        
        return successfulUpdates[0]?.data;
      }
      
      return null;
    } catch (error) {
      console.error("Error updating industry:", error);
      throw error;
    }
  }

  async delete(recordIds) {
    try {
      await delay(300);
      
      const tableName = 'industry';
      const params = {
        RecordIds: Array.isArray(recordIds) ? recordIds : [recordIds]
      };
      
      const response = await this.apperClient.deleteRecord(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }
      
      if (response.results) {
        const successfulDeletions = response.results.filter(result => result.success);
        const failedDeletions = response.results.filter(result => !result.success);
        
        if (failedDeletions.length > 0) {
          console.error(`Failed to delete ${failedDeletions.length} records:${failedDeletions}`);
          throw new Error('Some records failed to delete');
        }
        
        return successfulDeletions.length === params.RecordIds.length;
      }
      
      return false;
    } catch (error) {
      console.error("Error deleting industries:", error);
      throw error;
    }
  }
}

export default new IndustryService();