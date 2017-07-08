import IO from 'socket.io-client'

class VueSocket {
    constructor() {}

    install (Vue, url, options) {
        if(options === null) {
            options = {}
        }
        const socket = new IO(url, options)
        Vue.prototype.$socket = socket
        Vue.socket = socket
    }
}

export default VueSocket