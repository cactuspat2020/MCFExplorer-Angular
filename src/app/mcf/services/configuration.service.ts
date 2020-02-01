import { Injectable } from '@angular/core';
import { MwsApiService } from './mws-api.service';
import { SpectrumApiService } from './spectrum-api.service';
import { CookieService } from 'ngx-cookie-service';

export interface Endpoint {
  marketplace: string;
  countryCode: string;
  endpointURL: string;
  marketplaceId: string;
}
export interface Configuration {
  selectedEndpoint: string;
  merchantId: string;
  mwsAuthToken: string;
  developerId: string;
  developerSecretKey: string;
}
const COOKIE_NAME = 'mcfExplorerSettings';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {

  configuration = {} as Configuration;

  constructor(
    public mwsApi: MwsApiService,
    public spectrumApi: SpectrumApiService,
    public cookieService: CookieService
  ) { }

  public getSavedConfiguration(): Configuration {
    // tslint:disable-next-line: no-unused-expression

    const storedCookie = this.cookieService.get(COOKIE_NAME);
    if (storedCookie) {
      this.configuration = JSON.parse(this.cookieService.get(COOKIE_NAME));
    } else {
      this.configuration.developerId = '';
      this.configuration.developerSecretKey = '';
      this.configuration.merchantId = '';
      this.configuration.mwsAuthToken = '';
      this.configuration.selectedEndpoint = 'US';
    }
    return this.configuration;
  }

  public saveConfiguration(settings: Configuration) {
    this.cookieService.set(COOKIE_NAME, JSON.stringify(settings));
  }

  public getEndpoints(apiFamily: string): Endpoint[] {
    if (apiFamily === 'MWS') {
      return this.mwsApi.getMwsEndpoints();
    } else if (apiFamily === 'Spectrum') {
      return this.spectrumApi.getEndpoints();
    } else {
      return [];
    }

  }
}
