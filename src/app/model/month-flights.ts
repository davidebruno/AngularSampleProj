export  namespace ryanairflights {

    export interface Flight {
        number: string;
        departureTime: string;
        arrivalTime: string;
    }

    export interface Day {
        day: number;
        flights: Flight[];
    }

    export interface Month {
        month: number;
        days: Day[];
    }

}