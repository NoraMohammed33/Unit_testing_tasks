describe('Student Score Evaluation', function () {
    it('should return "Invalid" for negative score', function () {
        expect(StudentScore(-10)).toEqual('Invalid');
    });

    it('should return "Failed" for score between 0 and 49', function () {
        expect(StudentScore(0)).toEqual('Failed');
        expect(StudentScore(49)).toEqual('Failed');
    });

    it('should return "Passed" for score between 50 and 64', function () {
        expect(StudentScore(50)).toEqual('Passed');
        expect(StudentScore(64)).toEqual('Passed');
    });

    it('should return "Good" for score between 65 and 74', function () {
        expect(StudentScore(65)).toEqual('Good');
        expect(StudentScore(74)).toEqual('Good');
    });

    it('should return "V.Good" for score between 75 and 84', function () {
        expect(StudentScore(75)).toEqual('V.Good');
        expect(StudentScore(84)).toEqual('V.Good');
    });

    it('should return "Excellent" for score between 85 and 99', function () {
        expect(StudentScore(85)).toEqual('Excellent');
        expect(StudentScore(99)).toEqual('Excellent');
    });

    it('should return "Invalid" for score greater than or equal to 100', function () {
        expect(StudentScore(100)).toEqual('Invalid');
        expect(StudentScore(120)).toEqual('Invalid');
    });
});
