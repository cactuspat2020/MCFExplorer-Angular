// tslint:disable: max-line-length
import { Injectable } from '@angular/core';

export interface Endpoint {
  marketplace: string;
  countryCode: string;
  endpointURL: string;
  marketplaceId: string;
}

@Injectable({ providedIn: 'root' })
export class SpectrumApiService {
  private endpoints: Endpoint[] =
  [
    // NA Endpoints
    {marketplace: 'Brazil', countryCode: 'BR', endpointURL:'https://sellingpartnerapi-na.amazon.com', marketplaceId: 'A2Q3Y263D00KWC'},
    {marketplace: 'Canada', countryCode: 'CA', endpointURL:'https://sellingpartnerapi-na.amazon.com', marketplaceId: 'A1AM78C64UM0Y8'},
    {marketplace: 'US', countryCode: 'US', endpointURL:'https://sellingpartnerapi-na.amazon.com', marketplaceId: 'ATVPDKIKX0DER'},

    // EU endpoints
    {marketplace: 'United Arab Emirates (U.A.E.)', countryCode: 'AE', endpointURL:'https://mws.amazonservices.ae', marketplaceId: 'A2VIGQ35RCS4UG'},
    {marketplace: 'Germany', countryCode: 'DE', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'A1PA6795UKMFR9'},
    {marketplace: 'Egypt', countryCode: 'EG', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'ARBP9OOSHTCHU'},
    {marketplace: 'Spain', countryCode: 'ES', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'A1RKKUPIHCS9HS'},
    {marketplace: 'France', countryCode: 'FR', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'A13V1IB3VIYZZH'},
    {marketplace: 'UK', countryCode: 'GB', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'A1F83G8C2ARO7P'},
    {marketplace: 'India', countryCode: 'IN', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'A21TJRUUN4KGV'},
    {marketplace: 'Italy', countryCode: 'IT', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'APJ6JRA9NG5V4'},
    {marketplace: 'Saudi Arabia', countryCode: 'SA', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'A17E79C6D8DWNP'},
    {marketplace: 'Turkey', countryCode: 'TR', endpointURL:'https://sellingpartnerapi-eu.amazon.com', marketplaceId: 'A33AVAJ2PDY3EV'},

    // FE Endpoints
    {marketplace: 'Singapore', countryCode: 'SG', endpointURL:'https://sellingpartnerapi-fe.amazon.com', marketplaceId: 'A19VAU5U5O7RUS'},
    {marketplace: 'Australia', countryCode: 'AU', endpointURL:'https://sellingpartnerapi-fe.amazon.com', marketplaceId: 'A39IBJ37TRP1C6'},
    {marketplace: 'Japan', countryCode: 'JP', endpointURL:'https://sellingpartnerapi-fe.amazon.com', marketplaceId: 'A1VC38T7YXB528'},
  ];


  constructor() { }

  public getEndpoints(): Endpoint[] {
    return this.endpoints;
  }
}
