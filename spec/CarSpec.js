describe('Car Speed Evaluation', function () {

    it('should return "Invalid" for negative speed', function () {
        expect(CarSpeed(-10)).toEqual('Invalid');
    });

    it('should return "Low" for speed between 0 and 40', function () {
        expect(CarSpeed(20)).toEqual('Low');
        expect(CarSpeed(39)).toEqual('Low');
    });

    it('should return "Normal" for speed between 40 and 120', function () {
        expect(CarSpeed(60)).toEqual('Normal');
        expect(CarSpeed(119)).toEqual('Normal');
    });

    it('should return "High" for speed between 120 and 200', function () {
        expect(CarSpeed(150)).toEqual('High');
        expect(CarSpeed(199)).toEqual('High');
    });

    it('should return "V.High" for speed between 200 and 220', function () {
        expect(CarSpeed(205)).toEqual('V.High');
        expect(CarSpeed(219)).toEqual('V.High');
    });

    it('should return "Invalid" for speed greater than or equal to 220', function () {
        expect(CarSpeed(220)).toEqual('Invalid');
        expect(CarSpeed(250)).toEqual('Invalid');
    });
});
