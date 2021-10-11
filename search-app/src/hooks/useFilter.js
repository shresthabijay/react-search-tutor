import React, { useState } from 'react'
import { useEffect } from "react"

const useFilter = ({ activities, filters }) => {
  const [filteredActivities, setFilteredActivities] = useState(activities)

  useEffect(() => {
    const filteredActivities = activities.filter((activity) => {
        // it is only staisfied when all the filters return true
        let isSatisfied = true

        filters.forEach((filter) => {

          if (filter.type === 'boolean') {
            isSatisfied = isSatisfied && activity[filter.name] === filter.value;
          }
          if (filter.type === 'range') {
            isSatisfied = isSatisfied &&  parseInt(activity[filter.name]) < filter.value;
          }
        })

        return isSatisfied
    })

    console.log(filteredActivities)
    setFilteredActivities(filteredActivities)
  }, [filters, activities])

  return filteredActivities
}

export default useFilter