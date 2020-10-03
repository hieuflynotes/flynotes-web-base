const ACCESS_TOKEN = "access_token";

export default class LocalStorage {
  static set(key: any, value: string) {
    localStorage.setItem(key, value);
  }

  static get(key: any): any {
    return localStorage.getItem(key);
  }

  static remove(key: any): any {
    return localStorage.removeItem(key);
  }

  static setToken(token: string) {
    this.set(ACCESS_TOKEN, token);
  }

  static getToken(): string {
    return this.get(ACCESS_TOKEN);
  }

  static removeToken(): string {
    return this.remove(ACCESS_TOKEN);
  }
}
