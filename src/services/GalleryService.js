import HttpService from './HttpService';
class GalleryService extends HttpService {
  getAll = async (payload, page, sort) => {
    let params = [];
    if(page) {
      params.push(`page=${page}`);
    }
    for (const param in payload) {
      if (payload[param]) {
        params.push(`${param}=${payload[param]}`);
      }
    }
      if (sort?.criteria) {
        params.push(`sort_by=${sort.criteria}`);
        if (sort.order) {
          params.push(`sort_order=${sort.order}`);
        }
    }
    const { data } = await this.client.get(`galleries?${params.join('&')}`);
    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`/galleries/${id}`);
    return data;
  };

  create = async (payload) => {
    const { data } = await this.client.post(`/galleries`, payload);
    return data;
  };

  edit = async (id, payload) => {
    const { data } = await this.client.put(`/galleries/${id}`, payload);
    return data;
  };

  delete = async (id) => {
    const { data } = await this.client.delete(`/galleries/${id}`);
    return data;
  };
}
export default new GalleryService();