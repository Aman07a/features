var profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge: function (age) {
        this.age = age;
    },
};
// const { age, name }: { age: number; name: string } = profile;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
