export type PostalCode = number;
export type CountryCode = string;

export interface Address {
    line1: string,
    line2: string,
    postalCode: PostalCode,
    // locality: string,
    countryCode: CountryCode,
    // countryName: string
}