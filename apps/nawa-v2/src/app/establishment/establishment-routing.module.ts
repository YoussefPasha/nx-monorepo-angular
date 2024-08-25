import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentHomeComponent } from './establishment-home/establishment-home.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { MyEntitiesComponent } from './my-entities/my-entities.component';
import { EstablishmentDraftsComponent } from './establishment-drafts/establishment-drafts.component';
import { RequestReviewComponent } from './request-review/request-review.component';
import { ArchivedRequestsComponent } from './archived-requests/archived-requests.component';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentHomeComponent,
  },
  {
    path: 'control-panel',
    component: ControlPanelComponent,
  },
  {
    path: 'my-entities',
    component: MyEntitiesComponent,
  },
  {
    path: 'establishment-drafts',
    component: EstablishmentDraftsComponent,
  },
  {
    path: 'request-review',
    component: RequestReviewComponent,
  },
  {
    path: 'archived-requests',
    component: ArchivedRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentRoutingModule {}
