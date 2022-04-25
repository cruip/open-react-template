import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import Papa from "papaparse";

defaults.global.tooltips.enabled = true
defaults.global.legend.position = 'bottom'

const BarChart = (input) => {
  const [percentageArr, setPercentageArr] = React.useState([]);

  React.useEffect(() => {
    Papa.parse(`/${input.country}.csv`, {
      download: true,
      header: true,
      complete: data => {
        const dataOnDate = data.data.filter(row => row.date === input.dateProvided);
        const percentages = dataOnDate[0];
        let arr = [];
        arr.push(parseFloat(percentages.Fear));
        arr.push(parseFloat(percentages.Joy));
        arr.push(parseFloat(percentages.Sadness));
        arr.push(parseFloat(percentages.Surprise));
        console.log(arr)
        setPercentageArr(arr);

        console.log(percentageArr);
      }
    });
  }, [input]);


  return (
    <div>
      <Pie
        data={{
          labels: ['Fear','Joy','Sadness','Surprise'],
          datasets: [
            {
              label: '# of votes',
              data: percentageArr,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
          plugins: {
            labels: {
              // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
              render: 'value',
              fontColor: ['green', 'white', 'red'],
              precision: 2
          
            },
          }
        }}
      />
    </div>
  )
}

export default BarChart