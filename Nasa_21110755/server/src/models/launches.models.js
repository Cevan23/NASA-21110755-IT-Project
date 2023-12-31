const launches = new Map();

let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explor IS1',
    launchDate: new Date('December 27,2030'),
    target: 'Kepler-442 b',
    customer:['ZTM','NASA'],
    upcoming: true,
    success: true,
}
launches.set(launch.flightNumber, launch);
function getAllLaunches(){
    return Array.from(launches.values());
}

function exitLaunchId(launchId)  {
    return launches.has(launchId); 
}

function addNewlaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success:true,
            upcoming: true,
            customer: ['ZERO to mastery','NASA'],
            flightNumber: latestFlightNumber,
        })
    )
}

function abortLaunchbyId(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}



module.exports = {
    getAllLaunches,
    addNewlaunch,
    exitLaunchId,
    abortLaunchbyId,
}