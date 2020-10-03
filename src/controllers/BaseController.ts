import { IBaseController } from "../submodules/flynotes-base/controller/IBaseController";
import { Paging } from "../submodules/flynotes-base/controller/Paging";
import { AxiosInstance } from "axios";

export class BaseController<T> implements IBaseController<T> {
  protected serviceURL: string;
  protected basePath: string;
  protected client: AxiosInstance;

  public constructor(
    serviceURL: string,
    basePath: string,
    client: AxiosInstance
  ) {
    this.serviceURL = serviceURL;
    this.basePath = basePath;
    this.client = client;
  }

  public find(): Promise<T[]> {
    const url = `${this.serviceURL}/${this.basePath}/find`;
    throw new Error("Method not implemented.");
  }
  public list(
    page: number,
    pageSize: number,
    orderByField: string[]
  ): Promise<Paging<T>> {
    const url = `${this.serviceURL}/${this.basePath}`;
    throw new Error("Method not implemented.");
  }

  public get(id: string): Promise<T> {
    const url = `${this.serviceURL}/${this.basePath}/${id}`;
    throw new Error("Method not implemented.");
  }
  public update(t: T): Promise<T> {
    const url = `${this.serviceURL}/${this.basePath}`;
    throw new Error("Method not implemented.");
  }
  public delete(id: string): Promise<T> {
    const url = `${this.serviceURL}/${this.basePath}/${id}`;
    throw new Error("Method not implemented.");
  }
}
