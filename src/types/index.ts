export interface IStation{
    id: number, 
    name: string,
    address: string,
    capacity: number,
    lat: number,
    lon: number,
}

export interface IResponseStation{
    id: number,
    name: string,
    address: string,
    average_departure_distance: number,
    average_return_distance: number,
    departure_journey: number,
    return_journey: number,
    lat: number,
    lon: number,
    static_map_url: string,
    top_departure_station: string[],
    top_return_station: string[],
}

export interface IJourney{
    id: number,
    departure: Date, 
    return: Date,
    departureStationId?: number,
    departureStation? : string,
    departureStationDetails? : IStation,
    returnStationId?: number,
    returnStation?: IStation,
    returnStationDetails?: IStation,
    duration: number,
    coveredDistance: number,
    month: string, 
}