var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (complex) {
        return new Complex(this.re + complex.re, this.im + complex.im);
    };
    Complex.prototype.sub = function (complex) {
        return new Complex(this.re - complex.re, this.im - complex.im);
    };
    Complex.prototype.abs = function () {
        return Math.sqrt(Math.pow(this.re, 2) + (Math.pow(this.im, 2)));
    };
    Complex.prototype.toString = function () {
        return this.re.toString() + " " + this.im.toString();
    };
    return Complex;
}());
var complex1 = new Complex(3, 4);
var complex2 = new Complex(2, 3);
var complexResult1 = complex1.add(complex2);
console.log(complexResult1.toString());
var complexResult2 = complexResult1.sub(complex1);
console.log(complexResult2.toString());
var complexResult3 = complexResult2.abs();
console.log(complexResult3);


