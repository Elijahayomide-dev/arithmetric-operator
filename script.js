// // A. Area of triangle
// let base = 10
// let height = 5
// let triangle = 0.5 * base * height
// console.log("Area of Triangle =" + triangle)

// // B. Area of square
// let side = 5
// let square = side * side
// console.log("Area of square =" + square)

// // C. Area of circle
// let radius = 10
// let circle = 3.142  * radius * radius
// console.log("Area of circle =" + circle)

// // D. Area of quadilateral
// let diagonal = 10
// let h1 = 6
// let h2 = 4
// let quadilateral = 0.5 * diagonal * (h1 + h2)
// console.log("Area of quadilateral =" + quadilateral)

// // E. Area of rhombus
// let d1 = 8
// let d2 = 6
// let rhombus = 0.5 * d1 * d2
// console.log("Area of rhombus =" + rhombus)

// // F. Area of trapezium
// let p1 = 10
// let p2 = 8
// let h = 5
// let trapezium = 0.5 * p1 + p2 * 5
// console.log("Area of trapezium =" + trapezium)

// // G. Area of parallelogram
// let pbase = 10
// let pheight = 5
// let parallelogram = pbase * pheight
// console.log("Area of parallelogram =" + parallelogram)

// // BMI
// let weight = 70
// let bmiheight = 1.75
// let bmi = weight / (bmiheight * bmiheight)
// console.log("bmi =" + bmi) 

// A. triangle
        function calculate(){
            let base = document.getElementById ('base').value
            let height = document.getElementById ('height').value
            let area  =1/2* base * height
            let display = document.getElementById('display')
            display.innerHTML = `<p>${area}</p>`
        }

        // B. square
        function calculate(){
        let side = document.getElementById('side').value
        let areaOfSquare = side*side
        let displayOne = document.getElementById('displayOne')
        displayOne.innerHTML =  `<p>${areaOfSquare}</p>`
        }

        // C.  circle
        function solve1(){
            let radius = document.getElementById('radius').value
            let areaOfCircle = 3.142*radius
            let displayTwo = document.getElementById('displayTwo')
            displayTwo.innerHTML = `<p>${areaOfCircle}</p>`
        }

        // D. quadilateral
        function solve2(){
            let diagonal = document.getElementById('diagonal').value
            let h1 = document.getElementById('height1').value
            let h2 = document.getElementById('height2').value
            let areaOfQuadilateral = 0.5* diagonal* (h1+h2)
            let displayThree = document.getElementById('displayThree')
            displayThree.innerHTML = `<p>${areaOfQuadilateral}</p>`
        }

        // E. rhombus
        function rhombus(){
            let d1 = document.getElementById('d1').value
            let d2 = document.getElementById('d2').value
            let areaOfRhombus = 0.5* d1 * d2
            let displayFour = document.getElementById('displayFour')
            displayFour.innerHTML = `<p>${areaOfRhombus}</p>`
            
        }

        // f. trapezium
        function trapezium(){
            let a = document.getElementById('a').value
            let b = document.getElementById('b').value
            let height = document.getElementById('trapHeight').value
            let areaOfTrapezium = 0.5 * a+b * height
            let displayFive = document.getElementById('displayFive')
            displayFive.innerHTML = `<p>${areaOfTrapezium}</p>`
        }

        // G.parallelogram
        function parallelogram(){
             let base = document.getElementById('pbase').value
        let height = document.getElementById('pheight').value
        let areaOfPrallelogram = base*height
        let displaySix = document.getElementById('displaySix')
        displaySix.innerHTML = `<p>${areaOfPrallelogram}</p>`

        }

        // H. bmi
    function bmi(){
        let bmiweight = document.getElementById('bmiweight').value
        let bmiheight = document.getElementById('bmiheight').value
        let bmiOutput = bmiweight / bmiheight
        let displaySeven = document.getElementById('displaySeven')
        displaySeven.innerHTML = `<p>${bmiOutput}</p>`

    }
       