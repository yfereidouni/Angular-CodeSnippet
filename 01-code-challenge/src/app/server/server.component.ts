import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    // styleUrls: ['./server.component.css']
    styles:[`
        .online{
            color:white
        }
    `]
})

export class ServerComponent {
    serverId: number = 1010;
    serverStatus: string = Math.random() > 0.5 ? 'offline' : 'online';

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus == 'offline' ? 'red' : 'green';
    }
}