export default class InvolvementAPI {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.key = 'uTwt6FRnbbTssMmx6qrV';
  }

  async getId() {
    const response = await fetch(`${this.url}`, {
      method: 'POST',
    });
    const data = await response.text();
    return data;
  }
}