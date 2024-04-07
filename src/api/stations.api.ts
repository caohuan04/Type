import instance from "./instance";

const getStations = async () => {
    const data = await instance.get("/stations")
    return data
}

export {
    getStations
}