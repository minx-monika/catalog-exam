const fs = require('fs');
const path = require('path');

// Function to decode Y value based on its base
function decodeYValue(base, value) {
  return parseInt(value, parseInt(base));
}

// Function to perform Lagrange Interpolation
function lagrangeInterpolation(roots) {
  const n = roots.length;
  let coefficients = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let termCoefficients = Array(n).fill(0);
    let termPoly = Array(n).fill(0);
    termPoly[0] = 1;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        let denominator = roots[i][0] - roots[j][0];
        let newPoly = Array(n).fill(0);

        for (let k = 0; k < termPoly.length; k++) {
          if (termPoly[k] !== 0) {
            for (let l = 0; l < termPoly.length - k; l++) {
              newPoly[k + l] += termPoly[k] * (-roots[j][0]);
            }
          }
        }

        for (let k = 0; k < newPoly.length; k++) {
          newPoly[k] /= denominator;
        }
        termPoly = newPoly;
      }
    }

    for (let k = 0; k < termPoly.length; k++) {
      coefficients[k] += roots[i][1] * termPoly[k];
    }
  }

  return coefficients;
}

// Function to evaluate the polynomial at a given x
function evaluatePolynomial(coefficients, x) {
  return coefficients.reduce((acc, coeff, idx) => acc + coeff * Math.pow(x, idx), 0);
}

// Function to find the constant term (c) from the JSON data
function findConstantTerm(jsonData) {
  const roots = [];

  for (const key in jsonData) {
    if (key !== "keys") {
      const x = parseInt(key);
      const base = jsonData[key].base;
      const value = jsonData[key].value;
      const y = decodeYValue(base, value);
      roots.push([x, y]);
    }
  }

  const coefficients = lagrangeInterpolation(roots);
  const c = evaluatePolynomial(coefficients, 0);

  return c;
}

// Function to read and process multiple test case JSON files
function processTestCases() {
  const directoryPath = path.join(__dirname, 'testcases');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.error('Error reading the directory:', err);
    }

    files.forEach(file => {
      const filePath = path.join(directoryPath, file);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return console.error(`Error reading file ${file}:`, err);
        }

        // Parse JSON data
        const jsonData = JSON.parse(data);

        // Calculate the constant term for this test case
        const c = findConstantTerm(jsonData);
        let roundedC = Math.round(c);

        console.log(`Test case: ${file}`);
        console.log(`The constant term c is: ${c}`);
        console.log(`The constant term c after roundoff is: ${roundedC}`);
        console.log('-----------------------------------');
      });
    });
  });
}

// Process all test cases
processTestCases();
