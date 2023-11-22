import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(public api: HttpClient) {}

  Url = 'http://localhost:8080/';

  public get(controller: string) {
    return this.api.get(this.Url + controller);
  }
  public async post(controller: string, body: any) {
    await this.api
      .get(this.Url + controller)
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }
  public async put(controller: string, body: any, id: number) {
    await this.api
      .get(this.Url + controller + '/' + id + body)
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }
  public async delete(controller: string, id: number) {
    const res = await this.api
      .delete(this.Url + controller + '/' + id)
      .toPromise();
    console.log(res);
  }
}
