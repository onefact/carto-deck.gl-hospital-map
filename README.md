# Mapping hospitals in New York

This repository generates a map of 100+ hospitals in New York, covering an area of 22M+ people. 

The data come from the Centers for Medicare & Medicaid Services, of the United States' Health and Human Services department. 

The data were converted to `geojson` format using python: https://github.com/onefact/payless.health-quality-metrics/blob/main/notebooks/230822-newyork-newark-hospitals-parquet-to-geojson.ipynb

See a map of the hospitals here for what to expect: https://colab.research.google.com/github/onefact/payless.health-quality-metrics/blob/main/notebooks/newyork_quality_metrics.ipynb

![image](https://github.com/onefact/carto-deck.gl-hospital-map/assets/5317244/49f6bc68-a95a-4b70-bcf6-4e4839cf3011)

This repo was built using the following command: `npm create vite@latest vite-react` with React and JavaScript.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
