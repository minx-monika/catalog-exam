# catalog-exam

# Lagrange Interpolation - Polynomial Solver

This project implements Lagrange Interpolation to find the polynomial that passes through a set of given points. Specifically, it focuses on finding the constant term of the polynomial, provided multiple test cases via JSON files.

## Features

- **Decoding Y values**: Supports values in various bases (e.g., decimal, hexadecimal, etc.).
- **Lagrange Interpolation**: Finds the polynomial based on the input roots.
- **Evaluate Polynomial**: Evaluates the polynomial to retrieve the constant term.
- **Multiple Test Cases**: Reads and processes multiple test cases from JSON files.

## Prerequisites

To run this project, you'll need:

- **Node.js**: Ensure that Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).

## Installation and Setup

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**:
   
   First, clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/yourusername/lagrange-interpolation-solver.git
2. **Navigate to the Project Directory**:

Go into the project's folder:

bash
Copy code
cd lagrange-interpolation-solver

3. **Install Dependencies**:

If your project requires any Node.js packages, install them using npm:

bash
Copy code
npm install

4.**Create the testcases Folder**:

Inside the root of the project directory, create a new folder named testcases:

bash
Copy code
mkdir testcases

5. **Add JSON Files**:

Place your JSON test case files inside the testcases folder. Each file should contain the test data for the polynomial calculations.
