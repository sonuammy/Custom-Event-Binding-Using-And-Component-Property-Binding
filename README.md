# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.




## Component Property Binding using @Input
Find the steps for component property binding using @Input decorator step by step.

1. In the parent component, first create a property. Here we are creating a property of our class Student type.

# stdLeaderObj = new Student('Narendra', 'Modi');  

2. Create a custom element in parent component that is a selector of one of our child component. Here we will perform component property binding.

# <child-two [stdLeader] = "stdLeaderObj"></child-two> 

3. Use @Input decorator to declare child component property as an input property that will receive value from parent using component property binding. Here we are using aliasing for property name.

# @Input('stdLeader')

# myStdLeader : Student;	

4. Now we are ready to fetch values from input component property in our child component.

# {{myStdLeader.fname +' '+ myStdLeader.lname}}  


## Custom Event Binding using @Output and EventEmitter
Here we will discuss custom event binding using @Output decorator step by step. 

1. Create text box using element property binding in child component. input event is fired when there is any change in text box.

$event.target.value fetches the current value of text box entered by user.

## <div>
   First Number :<input (input)="num1=$event.target.value" /> <br/>
   Second Number:<input (input)="num2=$event.target.value" /> <br/>
  <br/> <button (click)="addNumber()">Add Number</button>
</div>

2. Find the method created in child component that will be fired when click event is invoked on click of button from above (step-1) code snippet. emit() is the method of EventEmitter class that emits event payload.

addNumber() {
    this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num2));
}	 

3. In the child component, create an instance of EventEmitter annotated by @Output decorator. This instance will work as custom event name. Here we are using aliasing for custom event name.

@Output('addNumberEvent') 
addNumEvent = new EventEmitter<number>(); 
  
4. Now we are performing custom event binding. The custom event addNumberEvent will be invoked in parent component when emit() method is invoked from child component. The event payload is accessed by $event object.

<child-two (addNumberEvent) = "printSum($event)" > </child-two>  5. The event addNumberEvent will call printSum() method.
printSum(res) {
    this.sum = res;
}	 
