import HttpService from './HttpService';
class CommentService extends HttpService {
  add = async (id, payload) => {
    const newComment = { gallery_id: id, content: payload };
    const { data } = await this.client.post(`/comments`, newComment);
    return data;
  };

  delete = async (id) => {
    const { data } = await this.client.delete(`/comments/${id}`);
    return data;
  };
}

export default new CommentService();