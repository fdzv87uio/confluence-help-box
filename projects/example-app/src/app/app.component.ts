import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'example-app';
  helpOpen = true;
  articleUrl = 'https://iot-help.scrollhelp.site/iotkb/Dragino-Temperature%2FHumidity%2FProbe.2494890235.html?inAppHelp=true';
  relatedLinks = [
    {
      name:"Netvox Barricade Door Sensor",
      url:"https://iot-help.scrollhelp.site/iotkb/Netvox-Barricade-Door-Sensor.2496266243.html?inAppHelp=true"
    },
    {
      name:"Getting Started with the App",
      url:"https://iot-help.scrollhelp.site/iotkb/Getting-Started-with-the-App.2496331790.html?inAppHelp=true"
    },
  ]

  // methods
  setArticleUrl(url:string):void{
    this.articleUrl = url;
    console.log(this.articleUrl)
  }
}
