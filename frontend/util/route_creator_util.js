/////////////// Route Creator Utilities ///////////////////////////
// ajax requests for interacting with the google maps API as needed



/// Directions request between <point1> and <point2>
// Expects each point to be an array of [lat,lng]

export const getPath = (point1, point2) => {
    return $.ajax({
        url: "https://maps.googleapis.com/maps/api/directions/json",
        method: "GET",
        data: {
            key: window.googleAPIkey,
            origin: point1,
            destination: point2,
            mode: "walking",
        },
        dataType: "json"
    })
}
