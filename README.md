# Sorting Visualizer — Interactive Algorithm Visualizer 📊✨

[![Live Demo](https://img.shields.io/badge/Live_Demo-Sorting_Visualizer-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://dhruv261d.github.io/sorting-visualizer/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

An interactive data structures and algorithms visualizer built with **React 19** and **Vite**, demonstrating sorting mechanics, in-place swaps, comparisons, and time complexity differences in real time.

---

## 🌟 Supported Sorting Algorithms

| Algorithm | Best Time | Average Time | Worst Time | Space Complexity |
|---|---|---|---|---|
| **Quick Sort** | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(\log n)$ |
| **Merge Sort** | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n \log n)$ | $\mathcal{O}(n)$ |
| **Insertion Sort** | $\mathcal{O}(n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ |
| **Selection Sort** | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ |
| **Bubble Sort** | $\mathcal{O}(n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ |

---

## 🚀 Key Features

- **Dynamic Array Generation:** Generate random arrays with customizable sizes (from 10 to 100+ elements).
- **Adjustable Execution Speed:** Real-time speed slider to inspect fine-grained comparison steps or observe high-speed sorting runs.
- **Color-Coded Visual States:** Distinct color states representing comparisons, active pivot elements, sorted partitions, and index swaps.
- **Optimized UI Render Loop:** Decoupled animation timers preventing browser UI thread locking during large array sorts.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, JavaScript (ES6+), CSS3
- **Build Tool:** Vite
- **Deployment:** GitHub Pages (`gh-pages`)

---

## 📦 Local Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhruv261d/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
