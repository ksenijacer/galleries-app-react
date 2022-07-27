import HttpService from "./HttpService";

class GalleriesService extends HttpService {

    getAll = async () => {
        const { data } = await this.client.get('/galleries');
        return data;
      };

    get = async (id) => {
        const { data } = await this.client.get(`/galleries/${id}`);
        return data;
    }

    add = async (newGallery) => {
        const { data } = await this.client.post('/create', newGallery);
        return data;
    };


    edit = async ({id, ...restData}) => {
        const { data } = await this.client.put(`/edit/${id}`, restData)
        return data;
    }

    delete = async(id) => {
        const { data } = await this.client.delete(`/delete/${id}`);
        return data;
    }

}

const galleriesService = new GalleriesService();
export default galleriesService;