import { Component } from '@angular/core';
  
@Component({
  // This is the name of the element you are defining.
    selector: 'app-root',
  // Link to the html for the component
    templateUrl: './app.component.html',
  // YOu can use the template property with back ticks to specify the template inline
  // Link to the CSS for the component.
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    /* An empty array that is responsible
       to add a division */
    public items : any[] = [] ;
  
    /* A two-way binding performed which
       pushes text on division */
    public newTask :any;
  
    constructor() {
      // super(); - This can be used in a derived class to call the base class ctor.
      // Ctor is called when the component loads.
      // This runs before ngOnInit
    }

    ngOnInit():void {
      // This runs when the component is init.
      // Use this to init props.
      // This runs after the constructor.
    }

    /* When input is empty, it will
       not create a new division */
    public addToList() {
        if (this.newTask == '') {
        }
        else {
            this.items.push(this.newTask);
            this.newTask = '';
        }
    }
  
    /* This function takes to input the
       task, that has to be deleted*/
    public deleteTask(index: any) {
        this.items.splice(index, 1);
    }
}