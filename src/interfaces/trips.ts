export interface ITrip {
    id?: string,
    fromStation: string,
    toStation: string,
    startTime: string,
    seats: number,
    price: number,
    busHouseId: string,
    stationId: string,
    busHouse?: IBusHouse,
    station?: Stations
}

export interface IBusHouse {
    adress: string,
    id: string,
    name: string,
    phone: string
}

export interface Stations {
    id: string,
    name: string,
    province: string
}