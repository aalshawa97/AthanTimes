const { Coordinates, CalculationMethod, PrayerTimes } = require('adhan');
const moment = require('moment-timezone');

// Define the coordinates for Beaverton, Oregon
const coordinates = new Coordinates(45.4903, -122.8427);

// Choose the calculation method (University of Islamic Sciences, Karachi)
const params = CalculationMethod.NorthAmerica();

// Set the date to June 19, 2024
const date = new Date('2024-06-19');

// Calculate prayer times based on coordinates, date, and calculation method
const prayerTimes = new PrayerTimes(coordinates, date, params);

// Format prayer times in the required format (Adhan and Iqamah)
const formattedPrayerTimes = {
    Fajr: {
        Adhan: moment(prayerTimes.fajr).tz('America/Los_Angeles').format('h:mm A'),
        Iqamah: moment(prayerTimes.fajr).add(22, 'minutes').tz('America/Los_Angeles').format('h:mm A')
    },
    Duhr: {
        Adhan: moment(prayerTimes.dhuhr).subtract(1,'minutes').tz('America/Los_Angeles').format('h:mm A'),
        Iqamah: moment(prayerTimes.dhuhr).add(11, 'minutes').tz('America/Los_Angeles').format('h:mm A')
    },
    Asr: {
        Adhan: moment(prayerTimes.asr).tz('America/Los_Angeles').format('h:mm A'),
        Iqamah: moment(prayerTimes.asr).add(8, 'minutes').tz('America/Los_Angeles').format('h:mm A')
    },
    Maghrib: {
        Adhan: moment(prayerTimes.maghrib).tz('America/Los_Angeles').format('h:mm A'),
        Iqamah: moment(prayerTimes.maghrib).add(5, 'minutes').tz('America/Los_Angeles').format('h:mm A')
    },
    Isha: {
        Adhan: moment(prayerTimes.isha).tz('America/Los_Angeles').format('h:mm A'),
        Iqamah: moment(prayerTimes.isha).add(5, 'minutes').tz('America/Los_Angeles').format('h:mm A')
    }
};

// Print the formatted prayer times
console.log('Prayer\tAdhan is Maybe');
console.log(`Fajr\t${formattedPrayerTimes.Fajr.Adhan}`);
console.log(`Duhr\t${formattedPrayerTimes.Duhr.Adhan}`);
console.log(`Asr\t\t${formattedPrayerTimes.Asr.Adhan}`);
console.log(`Maghrib\t${formattedPrayerTimes.Maghrib.Adhan}`);
console.log(`Isha\t${formattedPrayerTimes.Isha.Adhan}`);
