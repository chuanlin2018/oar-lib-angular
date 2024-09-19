import { NgModule, APP_INITIALIZER }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthenticationService, OARAuthenticationService,
         MockAuthenticationService } from './auth.service';
import { ConfigModule } from '../config/config.module';

/**
 * a module providing components used to build a wizard interface.
 */
@NgModule({
    imports: [
        CommonModule, ConfigModule
    ],
    declarations: [
    ],
    providers: [
        { provide: AuthenticationService, useClass: OARAuthenticationService }
    ],
    exports: [
    ]
})
export class AuthModule { }

export { AuthenticationService, OARAuthenticationService, MockAuthenticationService }
