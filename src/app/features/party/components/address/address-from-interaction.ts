import { Observable } from "rxjs";
import { Address } from "../../model/address";


export interface AddressFormInteraction {
    address$: Observable<Address>,
    updateAddress(address: Address): Address
}