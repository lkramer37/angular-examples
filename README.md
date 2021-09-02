# LeahApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Tutorial

## The Basics
### DataBinding
Databinding = Communication

// Output Data
TypeScript Code (Business Logic) ==Output Data==> Template(HTML)
String Interpolation ( {{ data }})
Property Binding ( [property]="data" )

// String Interpolation vs Property Binding
Use String Interpolation when you want to output text
Use Property Binding when you want to change an element
Don't mix them

// Event Binding
TypeScript Code (Business Logic) <==React to (User) Events== Template(HTML)
Event Binding ( (event)="expression" )

// Two Way Data Binding
Important: For Two-Way-Binding you need to enable the ngModel directive. This is done by adding the FormsModule to the imports[] array in the AppModule.


// Directives
Directives are instructions in the DOM
Structural Directive: Look like a normal HTML Attribute but have a leading *. Affect a whole area in the DOM (elements get added/removed)
Attribute Directives: Look like a normal HTML Attribute (possibly with databinding or event binding). Only affect/change the element they are added to.

### Components & Databinding Deep Dive
// Custom Property Binding
Used for custom components
@Input() -> Passes into component
@Output() -> Passes out of component

//HTML Event listenter for component
<app-cockpit (serverCreated)="onServerAdded($event)"></app-cockpit>

//Component Event Emitter
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

onAddServer() {
    this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
    });
}

// Assigning an Alias to Custom Events
<app-cockpit (bpCreated)="onBlueprintAdded($event)"></app-cockpit>

@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

onBlueprint() {
    this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
    });
}

//More on View Encapsulation
@Component({
    selector: 'app-server-element',
    ...,
    encapsulation: ViewEncapsulation.Native //None, Emulated, etc
})

ShadowDom: ensures you component only receiveds it's defined css and not global attributes


//Using Local References in Templates
Local reference can be placed on any HTML element -> Holds a reference to the element
*Only in template, not in .ts
<input
    type="text"
    class="form-control"
    #servernameInput>
<button
    class="btn btrn-primary"
    (click)="onAddServer(serverNameInput)">Add Server
</button>

onAddServer(nameInput) {
    console.log(nameInput.value)
    this.serverCreated.emit({
        ...
    })
}
*or*
onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
        serverName: nameInput.value,
        ...
    })
}



//Getting Access to the Template & DOM with @ViewChild
Gives direct access to DOM elements
*For projects using Angular 9 or higher, you can omit static: false, you only need to specify static: true if you plan on using the selected element inside of ngOnInit().
*Don't use this method to change elements in the DOM

@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value;
    })
}





//Projecting Content into Components with ng-content
Hook for angular to add content into HTML
Everything placed between opening/closing tags of your own component is lost
Use for widgets that will be reused for different purposes. Can use same structure, but different content passed in

<ng-content></ng-content> <-! Placed where you want to render content (server-element.component.html)-->

<app-server-element>
    ...
    <p>
        <strong *ngIF="serverElement.type === 'server'">{{ serverElement.content }}>
    </p>
</app-server-element>

*Places <p> within <ng-content>

//Understanding the Component Lifecycle
*ngOnChanges*: Called after a bound input property changes (properties decorated with @Input()).
*ngOnInit*: Called once the component is initialized. Runs after the constructor.
*ngDoCheck*: Called during every change detection run. Executed on every check made by Angular. Checks occur regularly, rather than only when a change occurs. Triggers include: promises, events, ....
*ngAfterContentInit*: Called after content (ng-content) has been projected into view.
*ngAfterContentChecked*: Called every time the projected content has been checked.
*ngAfterViewInit*: Called after the component's view (and child views) has been initialized.
*ngAfterViewChecked*: Called every time the view (and child views) have been checked.
*ngOnDestroy*: Called once the component is about to be destroyed.

//Seeing Lifecycle Hooks in Action
See sample.components.ts

//Licecycle Hooks and Template Access
//Getting Access to ng-content with @ContentChild
//Wrap Up
### Course Project - Components & Databinding
//Recipe App - skipped
### Directives Deep Dive
DirectivesDeep Component

// ngFor and ngIf Recap
Can't have >1 structure directives on an element

//Building a Structural Directive
See Unless Component


### Course Project - Directives
//Building and Using a Dropdown Directive
See Dropdown Directive
See Header Component

### Using Services & Dependency Injection
//Module Introduction












