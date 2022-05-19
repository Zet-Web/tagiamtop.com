import {useState, useEffect, useContext} from 'react'
import useAxios from './useAxios'
import { useRouter } from 'next/router'
import { loadToken, removeToken, saveToken } from '../utils/storage'
import {MeContext} from "../pages/_app";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useTranslation from "next-translate/useTranslation";

const useAuth = () => {

    const {me, getMe} = useContext(MeContext)
    const {t} = useTranslation("common")
    const router = useRouter()
    const axios = useAxios()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const MySwal = withReactContent(Swal)
    useEffect(() => setUser(loadToken()), [])

    const login = async (login, password) => {
        try {
            setIsLoading(true)
            const res = await axios.post('/auth', {login, password})
            if(res.data.status === 'success') {
                saveToken(res.data.token)
                setUser(res.data.token)
               if(sessionStorage.getItem('orderLink')){
                    window.location.href = `${sessionStorage.getItem('orderLink')}`
                    sessionStorage.removeItem('orderLink')
                }else if(res.data.type === 'master'){
                    window.location.href = `/seller-account/statistics`
                }else if(res.data.type === 'manager'){
                   window.location.href = `/seller-account/orders`
               }else if(res.data.type === 'client'){
                   window.location.href = `/`
               }
            }else if(res.data.status !== 'success') {
                setIsLoading(false)
                return res.data.message
            }
        } catch(err) {
            setIsLoading(false)
            loginError()
            return
        }
    }

    const loginError = async (id) => {
        MySwal.fire({
            title: t('wrongLoginOrPassword'),
            confirmButtonColor: '#0088CC',
            showLoaderOnConfirm: true,
        })
    }

    const logout = async () => {
        setIsLoading(true)
        removeToken()
        window.location.href = `/`
        setIsLoading(false)
    }

    return {
        user, isLoading, login, logout
    }
}

export default useAuth