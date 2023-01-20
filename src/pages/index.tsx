import type { NextPage } from 'next'
import Image from 'next/image'
import { AdminLayout } from '@layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { PERSONS } from 'src/data/persons'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const GraphSet: React.FC = () => (<div
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
        data: [
          getRandomNumber(50, 300),
          getRandomNumber(50, 300),
          getRandomNumber(50, 300),
          getRandomNumber(50, 300),
          getRandomNumber(50, 300),
          getRandomNumber(50, 300),
        ],
        fill: true,
      }, {
        label: 'My Second dataset',
        borderColor: 'rgba(25, 135, 84, 1)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [
          getRandomNumber(50, 200),
          getRandomNumber(50, 200),
          getRandomNumber(50, 200),
          getRandomNumber(50, 200),
          getRandomNumber(50, 200),
          getRandomNumber(50, 200),
          getRandomNumber(50, 200),
        ],
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
</div>)

const Home: NextPage = () => {
  const [shownSet, switchSet] = useState("one")

  return (<AdminLayout>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <Card bg="primary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                66K
                <span className="fs-6 ms-2 fw-normal">
                  (+13.6%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Customers</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart1"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 20,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March'],
                datasets: [{
                  label: 'Customers Q1',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [35, 49, 66],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="success" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                €56K
                <span className="fs-6 ms-2 fw-normal">
                  (23.9%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Revenue</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart2"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 0,
                    max: 65,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March'],
                datasets: [{
                  label: 'Revenue Q1',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [15, 29, 56],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="primary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                42.6%
                <span className="fs-6 ms-2 fw-normal">
                  (2.7%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Growth Rate</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart3"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March'],
                datasets: [{
                  label: 'Growth Rate Q1',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [36, 45, 43],
                  fill: true,
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="danger" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                51K
                <span className="fs-6 ms-2 fw-normal">
                  (-11.6%
                  <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                  )
                </span>
              </div>
              <div>Sessions</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart4"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Bar
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
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
                datasets: [{
                  label: 'Overall Visits',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                  barPercentage: 0.6,
                }],
              }}
            />
          </div>
        </Card>
      </div>
    </div>
    <Card className="mb-4 bg-dark card-with-border text-white">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0">Customer Sessions</h4>
            <div className="small">January - March 2023</div>
          </div>
          <div className="d-none d-md-block">
            <ButtonGroup aria-label="Graph toolbar" className="mx-3">
              <input
                className="btn-check"
                id="option1"
                type="radio"
                name="options"
                autoComplete="off"
                onClick={() => switchSet("two")}
              />
              <label className="btn btn-outline-secondary" htmlFor="option1">Day</label>
              <input
                className="btn-check"
                id="option2"
                type="radio"
                name="options"
                autoComplete="off"
                defaultChecked
                onClick={() => switchSet("one")}
              />
              <label
                className="btn btn-outline-secondary"
                htmlFor="option2"
              >
                Month
              </label>
              <input
                className="btn-check"
                id="option3"
                type="radio"
                name="options"
                autoComplete="off"
                onClick={() => switchSet("three")}
              />
              <label className="btn btn-outline-secondary" htmlFor="option3">Year</label>
            </ButtonGroup>
            <Button variant="primary" onClick={() => alert("Downloading the data")}>
              <FontAwesomeIcon icon={faDownload} fixedWidth />
            </Button>
          </div>
        </div>
        {shownSet === "one" ? <GraphSet /> : <GraphSet />}
      </Card.Body>
      <Card.Footer>
        <div className="row my-2 row-cols-1 row-cols-md-5 text-center">
          <div className="col mb-sm-2 mb-0">
            <div>Purchases</div>
            <div className="fw-semibold">49,503 Customers (55%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="success"
              now={55}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div>Unique</div>
            <div className="fw-semibold">34,946 Sessions (38%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="info"
              now={38}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div>Product views</div>
            <div className="fw-semibold">48.756 Views (20%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="warning"
              now={20}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div>New Customers</div>
            <div className="fw-semibold">1,536 Customers (5%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="danger"
              now={5}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div>Return Rate</div>
            <div className="fw-semibold">40.15%</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="info"
              now={40}
            />
          </div>
        </div>
      </Card.Footer>
    </Card>
    <div className="row">
      <div className="col-md-12">
        <Card className="mb-4 bg-complementary text-white">
          <Card.Header>
            Sessions &amp; Sales
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-9">
                <div className="row">
                  <div className="col-3">
                    <div className="border border-2 border-info px-3 mb-3">
                      <small>
                        New
                      </small>
                      <div className="fs-5 fw-semibold">3,123</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="border border-2 border-success px-3 mb-3">
                      <small>
                        Recurring
                      </small>
                      <div className="fs-5 fw-semibold">19,543</div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="border border-2 border-danger px-3 mb-3">
                      <small>
                        Cancelled
                      </small>
                      <div className="fs-5 fw-semibold">1,464</div>
                    </div>
                  </div>
                </div>
                <hr className="mt-0" />
                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="small">
                      Legal Services
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="info"
                      now={34}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="success"
                      now={78}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={18}
                    />
                  </div>
                </div>
                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="small">
                      Insurance Services
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="info"
                      now={36}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="success"
                      now={44}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={18}
                    />
                  </div>
                </div>
                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="small">
                      Damages Paid
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="info"
                      now={12}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="success"
                      now={54}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={12}
                    />
                  </div>
                </div>
                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="small">
                      Other Services
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="info"
                      now={22}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="success"
                      now={53}
                    />
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="danger"
                      now={43}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="mb-4 bg-dark card-with-border text-white">
          <Card.Header>
            Recent Customers
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <table className="table table-dark border mb-0">
                <thead className="table-dark fw-semibold">
                  <tr className="align-middle">
                    <th className="text-center">
                      <FontAwesomeIcon icon={faUsers} fixedWidth />
                    </th>
                    <th>User</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                    <th aria-label="Action" />
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src={PERSONS[1]}
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">50%</div>
                        </div>
                        <div className="float-end">
                          <small >
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={50} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small">Last login</div>
                      <div className="fw-semibold">10 sec ago</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 shadow-none p-0"
                          id="action-user1"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src={PERSONS[0]}
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small">
                        <span>Recurring</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">10%</div>
                        </div>
                        <div className="float-end">
                          <small >
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={10} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcVisa} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small">Last login</div>
                      <div className="fw-semibold">5 minutes ago</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 shadow-none p-0"
                          id="action-user2"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image fill
                          className="rounded-circle"
                          src={PERSONS[2]}
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-warning rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">74%</div>
                        </div>
                        <div className="float-end">
                          <small >
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="warning" now={74} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcStripe} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small">Last login</div>
                      <div className="fw-semibold">1 hour ago</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 shadow-none p-0"
                          id="action-user3"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src={PERSONS[4]}
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-secondary rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">98%</div>
                        </div>
                        <div className="float-end">
                          <small >
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="danger" now={98} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcPaypal} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small">Last login</div>
                      <div className="fw-semibold">Last month</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 shadow-none p-0"
                          id="action-user4"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src={PERSONS[3]}
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">22%</div>
                        </div>
                        <div className="float-end">
                          <small >
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="info" now={22} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcApplePay} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small">Last login</div>
                      <div className="fw-semibold">Last week</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 shadow-none p-0"
                          id="action-user5"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src={PERSONS[5]}
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-danger rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small">
                        <span>New</span>
                        {' '}
                        | Registered: Jan 1, 2020
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">43%</div>
                        </div>
                        <div className="float-end">
                          <small >
                            Jun 11, 2020 - Jul 10, 2020
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={43} />
                    </td>
                    <td className="text-center">
                      <FontAwesomeIcon icon={faCcAmex} size="lg" fixedWidth />
                    </td>
                    <td>
                      <div className="small">Last login</div>
                      <div className="fw-semibold">Yesterday</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 shadow-none p-0"
                          id="action-user6"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div></Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>)
}

export default Home
