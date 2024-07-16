export class Api {
  static baseUrl = 'http://127.0.0.1:8000/auth';

  static async post(url, data) {
    try {
      const response = await fetch(`${Api.baseUrl}${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Log the response text for debugging
      const text = await response.text();
      console.log('Response text:', text);

      // Try to parse the JSON response
      const dataResponse = JSON.parse(text);

      return {
        statusCode: response.status,
        data: dataResponse,
      };
    } catch (error) {
      console.error('Error en la petición:', error);
      throw error;
    }
  }
}
