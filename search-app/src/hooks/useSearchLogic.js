import { useState } from "react"
import React from 'react'
import axios from "axios"

const useSearchLogic = ({ onDataFetched }) => {
    const [searchText, setSearchText] = useState("")

    const handleSearchText = (e) => {
        setSearchText(e.currentTarget.value); 
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(searchText, "hi")

        if (!searchText) return;
        
        try {
            const response = await axios.post('http://localhost:3005/search', {
                searchText
            })
            console.log(response.data, 'data')
            onDataFetched(response.data) 
        }catch(err) {
            console.log(err)
        }
    }

    return { handleSearchText, handleSubmit, searchText}
}

export default useSearchLogic

