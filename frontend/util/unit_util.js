////////// Unit Utils ////////////////////

// Contains utility functions to convert data from database into readable format



export function convertDateTime(date) {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
}

export function convertDistance(dist) {
    return (dist * 0.000621371)
}

export function convertDuration(dur){
    return new Date(dur * 1000).toISOString().substr(11, 8)
}
// Returns a string based on pace and actvity
export function convertPace(distance,duration,activity){
    if (activity = "Bike Ride"){
        let hours = duration/3600;
        let miles = convertDistance(distance);
        return (miles/hours).toFixed(2);
    } else {
        let minutes = duration/60;
        return convertDuration(minutes);
    }
}