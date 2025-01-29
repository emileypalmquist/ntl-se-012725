function calculateBlockDistance(start, end) {
    return Math.abs(start - end)
}

function calculateBlocksToFeet(blocks) {
    return blocks * 264
}

// define a function called distanceFromHqInBlocks
// takes in a pickup location (parameter)
// calculate the distance from hq(42nd) and the pickup(parameter)
// function returns the distance

function distanceFromHqInBlocks(pickUpLocation) {
    // if (pickUpLocation > 42) {
    //     return pickUpLocation - 42
    // } else {
    //     return 42 - pickUpLocation
    // }
    // return Math.abs(42 - pickUpLocation)
    return calculateBlockDistance(pickUpLocation, 42)
}

// define a function called distanceFromHqInFeet
// define a parameter (pickUpLocation)
// use distanceFromHqInBlocks to calculate the distance
// calculate distance in feet by multiplying distance by 264
// return distance in feet

function distanceFromHqInFeet(pickUpLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickUpLocation)
    // return distanceInBlocks * 264
    return calculateBlocksToFeet(distanceInBlocks)
}


// define a function called distanceTravelledInFeet
// define two parameters (start, end)
// calculate distance in blocks (start - end) make it positive
// calculate distance in feet by multiplying blocks by 264
// return distance in feet

function distanceTravelledInFeet(start, end) {
    const blocks = calculateBlockDistance(start, end)
    return calculateBlocksToFeet(blocks)
}

// define a function called calculateFarePrice
// define two parameters (start, end)
// calculate distance in feet (distanceTravelledInFeet)
// if distance in feet is 400 or less return 0
// if distance in feet is greater than 400 and less than or equal to 2000 return distance in feet * .02 (2 cents per foot)
// if distance in feet is greater than 2000 and less than or equal to 2500 return 25
// if distance in feet is greater than 2500 return "cannot travel that far"

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}