import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};

  @Input() name: string;

  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('[ServerElementComponent] Constructor called');
  }

  ngOnInit() {
    console.log('[ServerElementComponent] ngOnInit called');

    console.log('[ServerElementComponent] text content: ' + this.header.nativeElement.textContent);
    console.log('[ServerElementComponent] text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[ServerElementComponent] ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('[ServerElementComponent] ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('[ServerElementComponent] ngAfterContentInit called');
  
    console.log('[ServerElementComponent] text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('[ServerElementComponent] ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('[ServerElementComponent] ngAfterViewInit called');

    console.log('[ServerElementComponent] text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('[ServerElementComponent] ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('[ServerElementComponent] ngOnDestroy called');
  }
}
