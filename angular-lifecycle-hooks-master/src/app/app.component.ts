import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  SimpleChanges,
  AfterViewInit,
  AfterViewChecked,
  ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { AppService } from './app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit, AfterViewChecked {
  title = 'angular-lifecycle-hooks';

  constructor(private appService: AppService) {}

  itemList: string[] = [];
  showDesc = false;
  showFooter = true;
  numberOfItems = 1;

//"footer" is the name of the file.
//"FooterComponent" is the name of the class.

  @ViewChild('footer') footerComponent: FooterComponent;

  destroy$: Subject<boolean> = new Subject<boolean>();

  addItemList(item: any) {
    this.appService.addItems(item);
    this.numberOfItems = this.itemList.length;
  }

  deleteItem(item: any) {
    console.log(item);
    this.itemList = this.itemList.filter((itm: any) => itm.id !== item.id);
  }

  enableDescription(event) {
    this.showDesc = event;
  }

  ngDoCheck() {}

  ngOnInit() {
    // console.log('app component OnInit');
    //items is a subject. "next" is called everytime "addItem" is called in the subscription.
    this.appService.items.pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      this.itemList.push(data);
      // console.log(this.itemList.length);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('app component::::ngOnChanges:');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit:::::app component');
    setTimeout(() => {
      this.footerComponent.numberOfItems = this.itemList.length;
    });
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked:::::app component');
  }


  ngOnDestroy() {
    console.log("in ngOnDestroy method");
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  toggleFooter(evt) {
    this.showFooter = evt;
  }

}
