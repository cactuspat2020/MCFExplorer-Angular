// tslint:disable: max-line-length
import { Injectable } from '@angular/core';

export interface Endpoint {
  marketplace: string;
  countryCode: string;
  endpointURL: string;
  marketplaceId: string;
}

@Injectable({ providedIn: 'root' })
export class MwsApiService {
  private endpoints: Endpoint[] =
  [
    // NA Endpoints
    {marketplace: 'Brazil', countryCode: 'BR', endpointURL:'https://mws.amazonservices.com', marketplaceId: 'A2Q3Y263D00KWC'},
    {marketplace: 'Canada', countryCode: 'CA', endpointURL:'https://mws.amazonservices.ca', marketplaceId: 'A2EUQ1WTGCTBG2'},
    {marketplace: 'Mexico', countryCode: 'MX', endpointURL:'https://mws.amazonservices.com.mx', marketplaceId: 'A1AM78C64UM0Y8'},
    {marketplace: 'US', countryCode: 'US', endpointURL:'https://mws.amazonservices.com', marketplaceId: 'ATVPDKIKX0DER'},

    // EU endpoints
    {marketplace: 'United Arab Emirates (U.A.E.)', countryCode: 'AE', endpointURL:'https://mws.amazonservices.ae', marketplaceId: 'A2VIGQ35RCS4UG'},
    {marketplace: 'Germany', countryCode: 'DE', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'A1PA6795UKMFR9'},
    {marketplace: 'Egypt', countryCode: 'EG', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'ARBP9OOSHTCHU'},
    {marketplace: 'Spain', countryCode: 'ES', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'A1RKKUPIHCS9HS'},
    {marketplace: 'France', countryCode: 'FR', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'A13V1IB3VIYZZH'},
    {marketplace: 'UK', countryCode: 'GB', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'A1F83G8C2ARO7P'},
    {marketplace: 'India', countryCode: 'IN', endpointURL:'https://mws.amazonservices.in', marketplaceId: 'A21TJRUUN4KGV'},
    {marketplace: 'Italy', countryCode: 'IT', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'APJ6JRA9NG5V4'},
    {marketplace: 'Saudi Arabia', countryCode: 'SA', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'A17E79C6D8DWNP'},
    {marketplace: 'Turkey', countryCode: 'TR', endpointURL:'https://mws-eu.amazonservices.com', marketplaceId: 'A33AVAJ2PDY3EV'},

    // FE Endpoints
    {marketplace: 'Singapore', countryCode: 'SG', endpointURL:'https://mws-fe.amazonservices.com', marketplaceId: 'A19VAU5U5O7RUS'},
    {marketplace: 'Australia', countryCode: 'AU', endpointURL:'https://mws.amazonservices.com.au', marketplaceId: 'A39IBJ37TRP1C6'},
    {marketplace: 'Japan', countryCode: 'JP', endpointURL:'https://mws.amazonservices.jp', marketplaceId: 'A1VC38T7YXB528'},
  ];

  constructor() { }

  public getMwsEndpoints(): Endpoint[] {
    return this.endpoints;
  }
}
