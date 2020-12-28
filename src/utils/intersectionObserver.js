import { useCallback, useRef } from "react"


const pageNumber = 1 // useState + добавить проверку на последнюю страницу

const options = {}

const getUsers = (detector, observer) => {
    if(loading) {
        return undefined
    }
    if(detector.intersectionRatio > 0) {
        // setLoading(true)
        // start query
        // работаем с response
        // setLoading(false)
    }
}

const observer = useRef()

const getUsersRef = useCallback((node) => {
    observer.current = new IntersectionObserver(getUsers, options)
    observer.current.observe(node)
})