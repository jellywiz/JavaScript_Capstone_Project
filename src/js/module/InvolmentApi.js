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

  async getLikes() {
    const response = await fetch(`${this.url}${this.key}/likes`);
    const data = await response.json();
    return data;
  }

  async postLikes() {
    const response = await fetch(`${this.url}${this.key}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: '1',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  }
}