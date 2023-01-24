import { AdminLayout } from '@layout'
import { GraphItem } from '@types'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import useSWR from 'swr'

const fetcher = async (url: string) => await fetch(url).then((res) => res.json())

const API_BASE_URL = '/api/stock'

export default function Index() {
  const { data: dataOne, error: errorOne } = useSWR(`${API_BASE_URL}?company=1`, fetcher)
  const { data: dataTwo, error: errorTwo } = useSWR(`${API_BASE_URL}?company=2`, fetcher)

  let labels = [":00", ":02", ":04", ":06", ":08", ":10", ":12", ":14", ":16", ":18", ":20", ":22", ":24", ":26", ":28", ":30", ":32", ":34", ":36", ":38", ":40", ":42", ":44", ":46", ":48", ":50", ":52", ":54", ":56", ":58"]

  const [dataLabels, incrementLabels] = useState(labels)
  const [dataOnePoints, incrementOnePoints] = useState([250, 205, 204, 260, 190, 200, 175, 194, 240, 150, 190, 200, 260, 300, 169, 210, 300, 190, 200, 201, 210, 180, 170, 203, 240, 190, 250, 255, 180, 200])
  const [dataTwoPoints, incrementTwoPoints] = useState([150, 130, 135, 150, 165, 155, 190, 200, 201, 190, 180, 185, 202, 205, 209, 170, 179, 200, 210, 220, 190, 198, 203, 209, 195, 189, 200, 230, 205, 195])

  useEffect(() => {
    const interval = setInterval(() => {
      incrementLabels([...dataLabels.slice(1), dataLabels[0]])
      incrementOnePoints([...dataOnePoints.slice(1), dataOnePoints[0]])
      incrementTwoPoints([...dataTwoPoints.slice(1), dataTwoPoints[0]])
    }, 2000)
    return () => clearInterval(interval)
  }, [dataLabels, dataOnePoints, dataTwoPoints])


  if (errorOne || errorTwo) return <div>failed to load</div>
  if (!dataOne || !dataTwo) return null

  return (
    <AdminLayout>
      <div
        style={{
          height: '300px',
          marginTop: '50px',
        }}
      >
        <Line
          data={{
            labels: dataLabels,
            datasets: [{
              label: `${dataOne[0]?.company_name} (${dataOne[0]?.industry})`,
              borderColor: 'blue',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: dataOnePoints,
            }, {
              label: `${dataTwo[0]?.company_name} (${dataTwo[0]?.industry})`,
              borderColor: 'green',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 1,
              data: dataTwoPoints,
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
                max: 400,
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
