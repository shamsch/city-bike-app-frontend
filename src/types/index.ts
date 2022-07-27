export interface IStation{
    id: number, 
    name: string,
    address: string,
    capacity: number,
    lat: number,
    lon: number,
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