import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavStatusService {
  alertPanelActive = false
  constructor() { }
}
