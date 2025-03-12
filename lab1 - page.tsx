'use client'

import { useEffect, useState } from "react";

export default function page() {

  useEffect(() => {
    fetchData()
  }, [])

  // Fetch data from API
  const fetchData = async () => {
    const res = await fetch("// Enter the API here //")
    const resData = await res.json()

    // Show information on console
    console.log(resData)
  }

  return (
    <>
    </>
  )
}
