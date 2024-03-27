export interface IAddress {
  address_street: string;
  address_neighborhood: string;
  address_postalcode: string;
  address_city: string;
  address_state: AddressState;
}

interface AddressState {
  state_id: number;
  state_uf: string;
  state_name: string;
}
