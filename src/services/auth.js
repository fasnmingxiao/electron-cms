import baseService from "./base";

class AuthService {
  async login(user) {
    const response = await baseService().post("api/v1/login", {
      username: user.username,
      password: user.password,
    });
    if (response.data.success) {
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
