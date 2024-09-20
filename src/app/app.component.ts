import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';
import { FilterCustomPipePipe } from './custom-pipe/filter-custom-pipe.pipe';
import { DemoComponent } from './demo/demo.component';
import { HttpClient } from '@angular/common/http';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { SocketDemoComponent } from './socket-demo/socket-demo.component';
import { RxjsLearnComponent } from './rxjs-learn/rxjs-learn.component';
import { DemoService } from './service/demo.service';
import { Token } from '@angular/compiler';
import { StripeComponent } from './stripe/stripe.component';
import { BaseComponent } from './base/base.component';
import { Web3ConnectComponent } from './web3-connect/web3-connect.component';
import { BalanceComponent } from './balance/balance.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './service/auth.service';
import { UseRole } from './enums/user-role.enum';
import { RoleDisplayComponent } from './role-display/role-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoleDisplayComponent,AuthComponent,RouterOutlet,StripeComponent,Web3ConnectComponent ,UserListComponent,RouterModule,CommonModule,ChildComponent,UnlessDirective,FilterCustomPipePipe,DemoComponent,FileUploadComponent,FormsModule,LifeCycleHooksComponent,SocketDemoComponent,RxjsLearnComponent,BalanceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'Angular-new';
  searchQuery! :string;
  constructor(private authService:AuthService,private cookie:CookieService,private http:HttpClient,private demoService:DemoService,private router:Router,private activatedRoute:ActivatedRoute){
    super();
    this.displayInfo();
  }

  setCookie(){
    console.log(1);
    this.cookie.set('jega','jega@yopmail.com');
    console.log("cookie was set successfully");
  }

  getCookie(){
   
    console.log(this.cookie.get('jega'));
  }

  RemoveCookie(){
    this.cookie.deleteAll();
  }


  numbers = [
    { id: 1, name: 'Number 1' },
    { id: 2, name: 'Number 2' },
    { id: 3, name: 'Number 3' }
  ];

  trackbyId(index:number, num:any){
    return num.id;
  }

  //test unless directive variable
  display=false;

  //custum filter pipe data
  fruits = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'grape' },
    { name: 'pineapple' }
  ];

  //interceptors http req
  ngOnInit(): void {

    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);
      }

      if(event instanceof NavigationEnd) {
        console.log('Navigation ended:', event.url);

      }

      if(event instanceof NavigationCancel) {
        console.log('Navigation canceled:', event.url);
      }

      if(event instanceof NavigationError) {
        console.log('Navigation error:', event.error);
      }
    })
    this.activatedRoute.fragment.subscribe((data)=>{
      console.log("route fragment:",data);
      this.goToSection(data);
    })

    this.http.get('https://jsonplaceholder.org/users').subscribe(
      (response)=>{
        console.log(response);
      }
    );

    this.demoService.createTask.subscribe((value)=>{
      this.tasks.push(value);
    })


    this.involkeStripe()


    
    
  }

  //ngModel change

  userName: string = '';
  onNameChange(newName: string) {
    console.log('Name changed to:', newName);
  }

  //change event
  userEmail: string = '';
  onEmailChange(event:Event){
    // console.log(event.target );
    const inputEl = event.target as HTMLInputElement;
    console.log(inputEl.value);

  }

  receivedMessage='';
  receiveMessage(message :string){
    this.receivedMessage=message;
  }
  

  tasks:string[]=['task1','task2','task3'];

  emit(data:number){
    console.log(" i am from emiting app component");
    this.demoService.sub.next(data);
  }

  makePayment(amount:any) {
    console.log('hi');
    const paymentHandler = (<any>window).stripeCheckout.configure({
      key :'sk_test_51PZ6WiRxSEeK2VnRPkwBh3u9pJL0x8gNtbrKFZT2e3D5BpUMNQi6UaMSefQSv2QUZjpCme5uLr6YTaSMjdQxoiZ000jzbw3t4v',
      locale : 'auto',

      token :function(stripeToken:any){
        console.log(stripeToken.card)
        alert('stripe token generated');
      }
    })

    paymentHandler.open({
      name :'Test payment',
      description : 'payment',
      amount : amount * 100
    })

  }


  involkeStripe(){
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = '';
      window.document.appendChild(script);
    }
  }


  performTask(): void {
    this.logMessage('Task is being performed');
    this.fetchData();
  }

  override displayInfo(): void {
    console.log('DerivedComponent info');
    super.displayInfo(); // Optionally call the base class method
  }

  getProduct() {
    this.router.navigate(['/product'], { queryParams: { id: 101, category: 'electronics' } });
  }
  
  onSearch(){
    this.router.navigate(['/product'], { queryParams: {search:this.searchQuery}})
  }

  goToSection(data:any){
    document.getElementById(data)?.scrollIntoView({behavior:'smooth'});
  }


  // This method manually triggers scrolling if the same link is clicked again.
  scrollToSection(fragment: string) {
    this.goToSection(fragment);
  }


  login(){
    this.authService.login();  
    
  }
// Enum
  role =UseRole.User;
  userRoles = Object.values(UseRole); 

  getRoleMessage(){
    switch(this.role){
      case UseRole.Admin:
        return 'you have admin access';
      case UseRole.User:
        return 'you have user access';
      case UseRole.Guest:
        return 'you have guest access';
      default:
        return 'you have no access';
    }
  }

}
