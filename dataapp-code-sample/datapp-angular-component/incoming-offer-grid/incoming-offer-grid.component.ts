import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/core/interfaces/offer.interface';
import { UtilService } from 'src/app/core/services/util.service';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/core/services/offer.service';
import { appDefaults } from 'src/app/app.constants';
import { DataView } from 'src/app/core/enums/data-view.enum';
import { OfferType } from 'src/app/core/enums/offer-type.enum';

@Component({
  selector: 'app-incoming-offer-grid',
  templateUrl: './incoming-offer-grid.component.html',
  styleUrls: ['./incoming-offer-grid.component.scss']
})
export class IncomingOfferGridComponent implements OnInit {
  _dataView: any;
  _offerType: any;

  @Input('offers') offers: Array<Offer> = [];
  @Input('dashboardList') dashboardList: boolean = false;

  constructor(public utilSvc: UtilService,
    private router: Router,
    public offerSvc: OfferService) {
    this._dataView = DataView;
    this._offerType = OfferType;
  }

  ngOnInit() {
    if (this.dashboardList) {
      this.offers = this.offers.slice(appDefaults.startCount, appDefaults.offerCount);
    }
  }

  redirectToOfferDetail(offer: Offer) {
    this.offerSvc.setSelectedOffer(offer);
    this.router.navigate(['/dashboard/offer/incoming-detail']);
  }

}
