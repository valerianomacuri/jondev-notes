import React, { useEffect, useState } from 'react'

export const useLocalStorage = (itemName, initialValue) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem
                if(!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItem = initialValue
                } else {
                parsedItem = JSON.parse(localStorageItem)
                }

                setItem(parsedItem)
                setLoading(false)
            } catch (e) {
                setError(e)
            }
        }, 1000)
    })


    const saveItem = (newItem) => {

        try {
            const stringifiedTodos = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedTodos)
            setItem(newItem)
        } catch (e) {
            setError(e)
        }
    }

    
    return {
        item,
        saveItem,
        loading,
        error
    }
}
