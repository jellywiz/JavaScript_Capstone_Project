export default class InvolvementAPI {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.key = 'uTwt6FRnbbTssMmx6qrV';
    this.headers = { 'Content-type': 'application/json; charset=UTF-8' };
  }

  async getId() {
    const response = await fetch(`${this.url}`, {
      method: 'POST',
    });
    const data = await response.text();
    return data;
  }

  async addLikes(id) {
    const response = await fetch(`${this.url}${this.key}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  }

  async getLikes() {
    const result = await fetch(`${this.url}${this.key}/likes`, {
      method: 'GET',
    });
    const list = await result.json();
    return list;
  }

  async getComments(id) {
    const response = await fetch(`${this.url}${this.key}/comments?item_id=${id}`, { method: 'GET' });
    const data = await response.json();
    return data;
  }

  async postComments(comment, UserName, id) {
    const body = JSON.stringify({
      item_id: id,
      username: UserName,
      comment,
    });
    await fetch(`${this.url}${this.key}/comments`, {
      method: 'POST',
      body,
      headers: this.headers,
    });
  }
}
