import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {END_POINTS, EntityDataService} from '../../utils';
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AttendanceService extends EntityDataService<any> {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, END_POINTS.attendance.attendance);
  }

  public getForReport$(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.endPoint}/reporte/${id}`);
  }
}
