import Api from '@/services/Api'

export default {
  setTime () {
    return Api().get('/time')
  }
}
