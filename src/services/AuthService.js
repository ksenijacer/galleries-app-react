import HttpService from "./HttpService";

class AuthService extends HttpService {
  login = async (credentials) => {
    const { data } = await this.client.post("/login", credentials);
    return data;
  };

  register = async (userData) => {
    const { data } = await this.client.post("/register", userData);
    return data;
  };

  logout = async () => {
    await this.client.post("/logout");
  };

  getActiveUser = async () => {
    const { data } = await this.client.get("/profile");
    return data;
  };
}

const authService = new AuthService();
export default authService;