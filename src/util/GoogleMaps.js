const Maps = {
    search (address, city, zipCode) {
        const newAddress = address.replace(/\s/g, '+');
        const newCity = city.replace(/\s/g, '+');
        const newZipCode = zipCode.replace(/\s/g, '+');

        const encodedAddress = `${newAddress}+ %2C + ${newCity}+ %2C + ${newZipCode}`

        return  `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    }
}
export default Maps;