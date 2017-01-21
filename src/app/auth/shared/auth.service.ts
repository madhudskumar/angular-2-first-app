import {Injectable} from "@angular/core";
import {User} from "./user.interface";
import {Router} from "@angular/router";

declare var firebase:any;

@Injectable()
export class AuthSerice {

  constructor(
    private router:Router
  ){}

  signUpUser(user:User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        console.log(error);
    });
  }

  signInUser(user:User){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        console.log(error);
    });
  }

  isAuth(){
    var user = firebase.auth().currentUser;

    return user?true:false;
  }

  logOut(){
    firebase.auth().signOut();
    this.router.navigate(["/signIn"]);
  }
}
