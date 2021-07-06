import { Component, Input, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Articulo } from 'src/app/models/articulo';
import { MessageService } from 'src/app/services/message.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-item-articulo',
  templateUrl: './item-articulo.component.html',
  styleUrls: ['./item-articulo.component.css']
})
export class ItemArticuloComponent implements OnInit {

  @Input() articulo: Articulo;
  @Input() index: number;
  isLogged = false;
  userLogged: SocialUser;
  constructor(
    private messageService: MessageService,
    private tokenService: TokenService,
    private socialAuthService: SocialAuthService,
    ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
   }
  
  addCart():void{
    this.messageService.sendMessage(this.articulo);
  }
}
