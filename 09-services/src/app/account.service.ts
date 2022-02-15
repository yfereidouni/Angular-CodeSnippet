import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()

export class AccountsService{
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test Account',
            status:'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'Unknown'
        }
    ];

    constructor(private LoggingService:LoggingService){}

    addAccount(name: string, status: string){
        this.accounts.push({name: name,status: status});
        this.LoggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.LoggingService.logStatusChange(status);

    }
}