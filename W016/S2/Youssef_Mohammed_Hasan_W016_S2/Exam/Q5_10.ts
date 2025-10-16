class Shape {
      private _color: string;
      private _filled: boolean;

      constructor(color = "red", filled = true) {
            this._color = color;
            this._filled = filled;
      }

      get color(): string {
            return this._color;
      }

      set color(c: string) {
            this._color = c
      }

      isFilled() {
            return this._filled
      }

      set filled(f: boolean) {
            this._filled = f
      }

      toString() {
            return `Shape[color=${this._color}, filled=${this._filled}]`
      }
}

class Circle extends Shape {
      private _radius: number
      constructor(radius: number, color = '', filled = false) {
            super(color, filled)
            this._radius = radius
      }

      get radius() { return this._radius }
      set radius(r: number) { this._radius = r }

      getArea() {
            return this._radius * this._radius * Math.PI
      }

      getPerimeter() {
            return this._radius * 2 * Math.PI
      }

      toString() {
            return `Circle[${super.toString()}, radius=${this._radius}]`
      }
}

class Rectangle extends Shape {
      protected _width: number;
      protected _length: number;
      constructor(w: number = 1, l: number = 1, color = "red", filled = false) {
            super(color, filled)
            this._width = w
            this._length = l
      }

      get width() {
            return this._width
      }
      set width(w: number) {
            this._width = w
      }
      get length() {
            return this._length
      }
      set length(l: number) {
            this._length = l
      }

      getArea() {
            return this._length * this._width
      }
      getPerimeter() {
            return 2 * (this._length + this._width)
      }

      toString(): string {
            return `Rectangle[${super.toString()}, width=${this._width}, length=${this._length}]`
      }
}


class Square extends Rectangle {
      private _side: number

      constructor(side: number, color = "red", filled = false) {
            super(side, side, color, filled)
            this._side = side
      }

      get side() {
            return this._side
      }
      setSide(s: number) {
            this._width = s
            this._length = s
            this._side = s
      }
      set width(w: number){
            this.setSide(w)
      }
      set length(l: number){
            this.setSide(l)
      }

      toString(){
            return `Square[${super.toString()}]`
      }
}
