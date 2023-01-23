import { AdminLayout } from '@layout'
import { GraphItem } from '@types'
import { useEffect } from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const API_URL = 'https://eodhistoricaldata.com/api/real-time/AAPL.US?fmt=json&api_token=demo'

export default function Index() {
  let graphArray: GraphItem[] = []
  const { data, error } = useSWR(API_URL, fetcher)
  graphArray = [...graphArray, ...data]

  useEffect(() => {
    let interval = setInterval(() => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  if (error) return <div>failed to load</div>
  if (!data) return null

  return (
    <AdminLayout>
<div
  style={{
    height: '300px',
    marginTop: '40px',
  }}
>
  <Line
    data={{
      labels: ['01 Jan', '15 Jan', '01 Feb', '15 Feb', '01 March', '15 March'],
      datasets: [{
        label: 'Sessions dataset',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'rgba(13, 202, 240, 1)',
        pointHoverBackgroundColor: 'white',
        borderWidth: 2,
        data,
        fill: true,
      }, {
        label: 'My Second dataset',
        borderColor: 'rgba(25, 135, 84, 1)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [64, 55, 34, 65, 86, 91, 100],
      }, {
        label: 'Customer puchases dataset',
        borderColor: 'rgba(220, 53, 69, 1)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5],
        data: [64, 55, 34, 65, 86, 91, 100],
      }],
    }}
    options={{
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 350,
          ticks: {
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    }}
  />
</div>
    </AdminLayout>
  )
}
