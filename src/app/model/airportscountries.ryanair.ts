// Obj returned from https://api.ryanair.com/aggregate/3/common?embedded=airports,countries&market=en-gb

export namespace ryanair {

    export interface Country {
        code: string;
        name: string;
        currency: string;
    }

    export interface Coordinates {
        longitude: number;
        latitude: number;
    }

    export interface Airport {
        iataCode: string;
        name: string;
        seoName: string;
        coordinates: Coordinates;
        base: boolean;
        countryCode: string;
        regionCode: string;
        cityCode: string;
        currencyCode: string;
        routes: string[];
        seasonalRoutes: any[];
        categories: string[];
        priority: number;
    }

    export interface RootObject {
        countries: Country[];
        airports: Airport[];
    }

}

