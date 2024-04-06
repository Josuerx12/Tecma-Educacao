export interface IEditUserPayload {
  SUCCESS: string;
  ERROR: string;
}

export interface IEditUserCredentials {
  user_email: string;
  user_photo: FileList;
  user_address: string;
  user_neighborhood: string;
  user_city: string;
  user_postalcode: string;
}
