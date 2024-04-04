// UserDataModels.ts
// Overview of Models:
// * 
// * User: Represents individual users of the app, with their basic information and 
// *       associated properties.
// * Property: Contains detailed information about each property, including identification,
// *           owner details, financials, and performance metrics.
// * Address, Status, MortgageDetails, Expenses: Auxiliary interfaces providing specific
// *                                             details for properties.
// * PerformanceMetrics: Captures key financial and performance indicators for properties.
// * Realtor: Represents real estate agents with associated properties and user referrals.


// To Do: Figure out Expenses and Mortgage Details models and how they relate to Property model.
// 

// User Model
interface User {
    userId: string;
    //name: string;
    email: string;
    properties: Array<string>;
    isSubscribed: boolean;
    subscriptionExpiresOn?: string;
}

// Property & Related Models
interface Property {
    propertyId: string;
    ownerId: string; //userId of the owner
    propertyImageUrl?: string;
    type?: string;
    address: Address;
    status: Status;
    purchaseDate: Date;
    purchasePrice: number;
    currentValue: number;
    mortgageDetails?: MortgageDetails;
    rentalIncome?: number;
    expenses?: Expenses;
    otherDetails?: string;
    performanceMetrics?: PerformanceMetrics;
}

interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    placeId: string;
    unitNumber?: string;
}

export enum Status {
    Vacant = "vacant",
    Rented = "rented",
    Primary = "primary"
}

interface MortgageDetails {
    mortgageRate?: number;
    mortgagePayment?: MortgagePayment;
    downPayment?: number;
    loanAmount?: number;
    amortizationPeriod?: number;
    term?: number;
    provider?: string;
    mortgageBalance?: number;
}

interface MortgagePayment {
    paymentAmount: number;
    paymentFrequency: "monthly" | "bi-weekly" | "weekly";
}

interface Expenses {
    propertyTaxes?: ExpenseItem;
    utilities?: ExpenseItem;
    condoFees?: ExpenseItem;
    homeInsurance?: ExpenseItem;
    maintenance?: ExpenseItem;
    legalAndProfessional?: ExpenseItem;
    managementFees?: ExpenseItem;
    other?: ExpenseItem;
}

interface ExpenseItem {
    amount: number;
    category: string;
    frequency: "monthly" | "annual" | "one-time";
}

interface Maintenance {
    lawnCare: number;
    snowRemoval: number;
    repairs: number;
    vacancy: number;
}

interface Utilities {
    electricity: number;
    gas: number;
    waterAndSewer: number;
    garbage: number;
    internetAndCable: number;
}

// Performance Metrics Model
// toDo: checks for optional data before performing calculations or displaying data to the user.
interface PerformanceMetrics {
    propertyId: string;
    cashFlow: number; // Rental Income - (Mortgage Payment + Expenses)
    capRate: number; // (Net Operating Income / Current Property Value) x 100
    cashOnCashReturn: number; // (Annual Cash Flow / Total Cash Invested) x 100
    grossRentalYield: number; // (Annual Rental Income / Property Purchase Price) x 100
    operatingExpenseRatio: number; // (Operating Expenses / Gross Rental Income) x 100
    loanToValueRatio: number; // (Mortgage Balance / Current Property Value) x 100
    appreciation: number; // ((Current Property Value - Purchase Price) / Purchase Price) x 100
}

// Realtor Model
interface Realtor {
    realtorID: string;
    name: string;
    email: string;
    commissionRate: number;
    propertiesListed: Property[];
    referrals: User[]; // Assuming referrals are Users
}

// * News Section
// News Model
interface News {
    id: string;
    title: string;
    summary: string;
    content: NewsContent;
    publishedDate: Date;
}

interface NewsContent {
    header?: string;
    imgSrc?: string;
    text?: string;
    alt?: string; 
}

interface MarketStats {
    title: string;
    data: MarketStatItem[];
}

interface MarketStatItem {
    province: string;
    metric: "dollar" | "percentage" | "number";
    value: number;
}

// Exports
export type {
    User,
    Property,
    Address,
    Expenses,
    ExpenseItem,
    Utilities,
    Maintenance,
    MortgageDetails,
    Realtor,
    PerformanceMetrics,
    News,
    NewsContent,
    MarketStats,
    MarketStatItem
}
