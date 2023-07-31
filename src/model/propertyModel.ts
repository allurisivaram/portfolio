export interface IResults {
    Id: string;
    MlsNumber: string;
    PublicRemarks: string;
    Building: Building;
    Individual?: (IndividualEntity)[] | null;
    Property: Property;
    Business: Business;
    Land: Land;
    AlternateURL?: AlternateURL | null;
    PostalCode: string;
    HistoricalDataIsCleared: boolean;
    ProvinceName: string;
    RelativeDetailsURL: string;
    StatusId: string;
    PhotoChangeDateUTC: string;
    Distance: string;
    RelativeURLEn: string;
    RelativeURLFr: string;
    Media?: (MediaEntity | null)[] | null;
    InsertedDateUTC: string;
    TimeOnRealtor: string;
    Tags?: (null)[] | null;
    StandardStatusId?: string | null;
    PriceChangeDateUTC?: string | null;
  }
  export interface Building {
    StoriesTotal: string;
  }
  export interface IndividualEntity {
    IndividualID: number;
    Name: string;
    Organization: Organization;
    Phones?: (PhonesEntity)[] | null;
    Emails?: (EmailsEntity)[] | null;
    Photo: string;
    Position: string;
    PermitFreetextEmail: boolean;
    FirstName: string;
    LastName: string;
    CorporationDisplayTypeId: string;
    PermitShowListingLink: boolean;
    RelativeDetailsURL: string;
    AgentPhotoLastUpdated: string;
    PhotoHighRes: string;
    RankMyAgentKey: string;
    RealSatisfiedKey: string;
    TestimonialTreeKey: string;
    Websites?: (WebsitesEntity)[] | null;
    CorporationName?: string | null;
  }
  export interface Organization {
    OrganizationID: number;
    Name: string;
    Logo?: string | null;
    Address: Address;
    Phones?: (PhonesEntity)[] | null;
    Emails?: (EmailsEntity)[] | null;
    Websites?: (WebsitesEntity)[] | null;
    OrganizationType: string;
    Designation: string;
    HasEmail: boolean;
    PermitFreetextEmail: boolean;
    PermitShowListingLink: boolean;
    RelativeDetailsURL: string;
    PhotoLastupdate: string;
  }
  export interface Address {
    AddressText: string;
    PermitShowAddress: boolean;
    DisseminationArea?: null;
  }
  export interface PhonesEntity {
    PhoneType: string;
    PhoneNumber: string;
    AreaCode: string;
    PhoneTypeId: string;
  }
  export interface EmailsEntity {
    ContactId: string;
  }
  export interface WebsitesEntity {
    Website: string;
    WebsiteTypeId: string;
  }
  export interface Property {
    Price: string;
    Type: string;
    Address: Address1;
    Photo?: (PhotoEntity)[] | null;
    TypeId: string;
    FarmType: string;
    ZoningType: string;
    AmmenitiesNearBy?: string | null;
    PriceUnformattedValue: string;
  }
  export interface Address1 {
    AddressText: string;
    Longitude: string;
    Latitude: string;
    PermitShowAddress: boolean;
    DisseminationArea?: null;
  }
  export interface PhotoEntity {
    SequenceId: string;
    HighResPath: string;
    MedResPath: string;
    LowResPath: string;
    Description: string;
    LastUpdated: string;
    TypeId: string;
  }
  export interface Business {
  }
  export interface Land {
    SizeTotal: string;
    SizeFrontage?: string | null;
  }
  export interface AlternateURL {
    DetailsLink: string;
    VideoLink?: string | null;
  }
  export interface MediaEntity {
    MediaCategoryId: string;
    MediaCategoryURL: string;
    Description: string;
    Order: number;
    VideoType?: string | null;
  }
  