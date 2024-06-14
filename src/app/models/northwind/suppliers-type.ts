import { AddressType } from './address-type';

export interface SuppliersType {
  supplierID: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: AddressType;
}
