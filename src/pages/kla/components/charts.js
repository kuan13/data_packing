import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'My chart'
  },
  series: [
    {
      data: [3, 2, 1, 4, 5, 6]
    }
  ]
};


const Charts = () => {
    return (   
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>

    );

};

export default Charts;