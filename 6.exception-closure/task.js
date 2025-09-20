function parseCount(value) {
    const result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
      throw new Error('Невалидное значение');
    }
    return result;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (e) {
      return e;
    }
  }
  
  class Triangle {
    constructor(a, b, c) {
      const invalid = (a + b) <= c || (a + c) <= b || (b + c) <= a;
      if (invalid) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return Number(s.toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (e) {
      return Object.freeze({
        get perimeter() { return 'Ошибка! Треугольник не существует'; },
        get area() { return 'Ошибка! Треугольник не существует'; }
      });
    }
  }