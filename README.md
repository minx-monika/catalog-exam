# catalog-exam

# Lagrange Interpolation - Polynomial Solver

This project implements Lagrange Interpolation to find the polynomial that passes through a set of given points. Specifically, it focuses on finding the constant term of the polynomial, provided multiple test cases via JSON files.

## Features

- **Decoding Y values**: Supports values in various bases (e.g., binary, hexadecimal, etc.).
- **Lagrange Interpolation**: Finds the polynomial based on the input roots.
- **Evaluate Polynomial**: Evaluates the polynomial to retrieve the constant term.
- **Multiple Test Cases**: Reads and processes multiple test cases from JSON files.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **Python** (for verification or running the Python version): You can use Python to cross-verify the calculations.
- **fs (File System)**: Node.js's native `fs` module is used to read the JSON files containing the test cases.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/lagrange-interpolation-solver.git
