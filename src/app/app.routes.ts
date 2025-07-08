import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RnhsComponent } from './catalog/rnhs/rnhs.component';
import { VchsComponent } from './catalog/vchs/vchs.component';
import { KidhsComponent } from './catalog/kidhs/kidhs.component';
import { TrackComponent } from './catalog/track/track.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'catalog/rnhs',
        component: RnhsComponent
    },
    {
        path: 'catalog/vchs',
        component: VchsComponent
    },
    {
        path: 'catalog/kidhs',
        component: KidhsComponent
    },
    {
        path: 'catalog/track',
        component: TrackComponent
    }

];
