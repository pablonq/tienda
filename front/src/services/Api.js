export class Api {
  static baseUrl = 'http://127.0.0.1:8000/auth';

  static async post(url, data) {
    try {
      
      const response = await fetch(`${Api.baseUrl}${url}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in request:', error);
      throw error;
    }
  }
}
