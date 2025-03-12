'use client'

import { useEffect, useState } from "react";

export default function page() {
  //Used to store data from key: "data"
  const [value, setValue] = useState({
    "temperature": 0,
  })

  useEffect(() => {
    fetchData()

    const interval = setInterval(() => {
      fetchData()
    }, 5000) // 5000 Millisecond (5 Second)

    return () => clearInterval(interval)
  }, [])

  // Fetch data from API
  const fetchData = async () => {
    const res = await fetch("// Enter the API here //")
    const resData = await res.json()
    // Show information on console
    console.log("This value default : ", resData)

    // Access data inside key : "data"
    setValue(resData.data)
    // Shaow data from key: "data" at console
    console.log("This value form resData.data : ", resData.data)
  }

  return (
    <>
      <h1>Sensor Data</h1>
      <h3>temperature : {value.temperature} °C</h3>
    </>
  )
}
