import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ConfluenceInterface } from './confluence.interface';

@Component({
  selector: 'app-confluence-help-box',
  templateUrl: './confluence.component.html',
  styleUrls: ['./confluence.component.css']
})
export class ConfluenceHelpCardComponent implements OnInit {
  @Input() articleUrl = '';
  @Input()
  helpOpen: boolean = false;
  urlSafe: SafeResourceUrl | undefined;
  


  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.articleUrl);
  }

}
