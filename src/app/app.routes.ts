import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RnhsComponent } from './home/catalogs/rnhs/rnhs.component';
import { VchsComponent } from './home/catalogs/vchs/vchs.component';
import { KidshsComponent } from './home/catalogs/kidshs/kidshs.component';
import { TrackComponent } from './home/catalogs/track/track.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home/catalogs/rnhs',
        component: RnhsComponent
    },
    {
        path: 'home/catalogs/vchs',
        component: VchsComponent
    },
    {
        path: 'home/catalogs/kidshs',
        component: KidshsComponent
    },
    {
        path: 'home/catalogs/track',
        component: TrackComponent
    }

];
