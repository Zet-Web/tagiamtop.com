import axios from 'axios'
/*import { loadToken } from '../utils/storage'*/
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useAxios = () => {
    const router = useRouter()
    axios.interceptors.response.use((response) => response, (error) => {
        return Promise.reject(error)
    })
    axios.defaults.headers.common['Accept-language'] = router.locale
    axios.defaults.baseURL = 'https://core.poprey.com/api'
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    /*
    useEffect(() => {
        const token = loadToken()
        if(token) axios.defaults.headers.common['Authorization'] = token
    }, [])*/

    return axios
}

export default useAxios
