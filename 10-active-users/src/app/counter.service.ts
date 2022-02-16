export class CounterService {
  activeToInactiveCounter = 2;
  inactiveToActiveCounter = 2;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    this.inactiveToActiveCounter--;
    // console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    console.log('-------------');
    console.log('Active   : ' + this.inactiveToActiveCounter);
    console.log('Inactive : ' + this.activeToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    this.activeToInactiveCounter--;
    // console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
    console.log('-------------');
    console.log('Active   : ' + this.inactiveToActiveCounter);
    console.log('Inactive : ' + this.activeToInactiveCounter);
  }
}
