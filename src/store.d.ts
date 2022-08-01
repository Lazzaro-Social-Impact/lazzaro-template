declare global {
  type TFeatures = {
    causes: boolean;
    courses: boolean;
    donations: boolean;
    events: boolean;
    impact: boolean;
    market: boolean;
    partners: boolean;
    volunteers: boolean;
  };

  type TBrand = {
    id: string;
    ong_id: string;
    logo: string;
    primary_color_hex: string;
    secondary_color_hex: string;
    default_img: string;
    terms_and_conditions: string;
    name: string;
    text_color: string;
    text_header1: string;
    text_header2: string;
    favIcon: string;
  };

  type TContact = {
    id:string;
    address: string;
    email: string;
    phone: string;
  };

  type TDescription = {
    id: string;
    description: string;
    img_url: string;
    ong_id: string;
    title: string;
    title_description: string;
    subtitle: string;
    text_color: string;
  };

  type TImpactData = {
    id: string;
    name: string;
    amount: string;
  }[];

  type TPlatformConfig = {
    id:string;
    active: boolean;
    currency: string;
    currency_symbol: string;
    language: string;
    powered_by_lazzaro: boolean;
    url: string;
  };

  type TRrss = {
    id: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
    web: string;
  };

  type TTeam = {
    id: string;
    img_url: string;
    linkedin: string;
    name: string;
    ongId: string;
    order: number;
    position: string;
  }[];

  interface IOngConfig {
    brand: TBrand;
    contact: TContact;
    description: TDescription;
    features: TFeatures;
    impactData: TImpactData;
    platformConfig: TPlatformConfig;
    rrss: TRrss;
    team: TTeam;
  }
}

export {}
