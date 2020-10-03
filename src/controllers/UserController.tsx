import { AxiosInstance } from "axios";
import { BaseController } from "./BaseController";
import { User, UserWithPracticeAndEmail } from "@Core/model/user/User";

export class UserController extends BaseController<User> {
  constructor(serviceUrl: string, client: AxiosInstance) {
    super(serviceUrl, "user", client);
  }

  getMe(): Promise<UserWithPracticeAndEmail> {
    const url = `${this.serviceURL}/${this.basePath}/me`;
    return new Promise((resolve, reject) => {
      this.client.get(url).then(
        (response) => {
          if (response && response.status === 200) {
            resolve(response.data);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
