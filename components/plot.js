import plotly from '../lib/plotly-myScatters.min';
import createPlotComponent from 'react-plotly.js/factory';
import intensity from '../data/ftirIntensity';
import wavenumber from '../data/ftirWavenum';

const Plot = createPlotComponent(plotly);

export default () => (
    <Plot
    data={[
      {
        x: wavenumber,
        y: intensity,
        type: 'scatter',
        mode: 'lines',
        marker: {color: 'black'},
      },
    ]}
    layout={{xaxis: {autorange: 'reversed'}}}
  />
)