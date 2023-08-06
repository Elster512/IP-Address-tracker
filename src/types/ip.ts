export type IpData = {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
  };
  isp: string;
};
