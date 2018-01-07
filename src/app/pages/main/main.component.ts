import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';
declare var $: any;


@Component({
    selector: 'app-main-cmp',
    templateUrl: './main.component.html'
})

export class NumberComponent implements OnInit {
    test: Date = new Date();
    f:any;
    numberAttempts: number = 1;
    success:boolean;
    constructor(public http: Http) {

    }


    ngOnInit() {
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    }

    guess(number) {
        console.log(number);
        this.numberAttempts = this.numberAttempts + 1;
        this.http.post('https://damp-reaches-72183.herokuapp.com/guess/register', number)
        .subscribe(
            data => {
                console.log('good');
                this.success = true;
                swal({
                    type: 'success',
                    title: 'Good job!',
                    text: 'You guessed right!',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-success'
    
                }).catch(swal.noop);
            },
            error => {
                console.log('bad');
                swal({
                    type: 'error',
                    title: 'Ops! Wrong number!',
                    text: 'Try again!',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-danger'
    
                }).catch(swal.noop);
            });
      }

      reset() {
        this.numberAttempts = 1;  
        this.success = false;
      }


}
