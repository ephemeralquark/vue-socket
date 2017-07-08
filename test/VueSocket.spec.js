import VueSocket from '../src/VueSocket'
import sinon from 'sinon'
import { expect } from 'chai'

describe('index.js', () => {
  let subject, vue

  beforeEach(() => {
    vue = sinon.spy()

    subject = new VueSocket()
  })

  it('should have a class exported', () => {
    expect(subject).to.be.ok
  })

  describe('install', () => {
    beforeEach(() => {
      subject.install(vue, 'fakeUrl', {'option': 'QHF839'})
    })

    it('should provide a global socket instance on the vue class', () => {
      expect(vue.socket).to.be.ok
    })

    it('should provide a $socket instance on the vue prototype', () => {
      expect(vue.prototype.$socket).to.be.ok
    })

    it('should instantiate a socket with option and url', () => {
      expect(vue.socket.io.opts.hostname).to.equal('fakeUrl')
      expect(vue.socket.io.opts.option).to.equal('QHF839')
    })
  })
})