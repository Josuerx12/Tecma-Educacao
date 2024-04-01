export interface IAuthPayload {
  USER_ID: number;
  USER_TOKEN: string;
  USER_TYPE: number;
  USER_COMPANY: UserCompany;
  ERROR?: string;
}

interface UserCompany {
  company_id: number;
  company_name: string;
  company_url: string;
  company_logo: string;
  company_header_color: string;
  company_categories_id: string;
  company_resources: string[];
}
