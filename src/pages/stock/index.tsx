import { AdminLayout } from '@layout'
import { GraphItem } from '@types'
import { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const API_BASE_URL = '/api/stock'

export default function Index() {
  const { data: dataOne, error: errorOne } = useSWR(`${API_BASE_URL}?company=1`, fetcher)
  const { data: dataTwo, error: errorTwo } = useSWR(`${API_BASE_URL}?company=2`, fetcher)

  let dataLabels = [":00", ":05", ":10", ":15", ":20", ":25", ":30", ":35", ":40", ":45", ":50", ":55",":00", ":05", ":10", ":15", ":20", ":25", ":30", ":35", ":40", ":45", ":50", ":55"]

  useEffect(() => {
    let interval = setInterval(() => {

    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (errorOne || errorTwo) return <div>failed to load</div>
  if (!dataOne || !dataTwo) return null

  let companyOne: GraphItem[] = [...dataOne.map((item: GraphItem) => item.close)]
  let companyTwo: GraphItem[] = [...dataTwo.map((item: GraphItem) => item.close)]

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
            labels: dataLabels,
            datasets: [{
              label: `${dataOne[0].company_name} (${dataOne[0].industry})`,
              borderColor: 'blue',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: companyOne,
            }, {
              label: `${dataTwo[0].company_name} (${dataTwo[0].industry})`,
              borderColor: 'green',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 1,
              data: companyTwo,
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
