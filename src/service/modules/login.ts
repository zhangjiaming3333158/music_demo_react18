import request from '@/service'

function now() {
  return new Date().getTime()
}

export function phoneLogin(phone: string, password: string) {
  return request.post({
    url: `/login/cellphone`,
    params: {
      phone,
      password,
    },
  })
}

export function getQrCode() {
  return request.get({
    url: `/login/qr/key?timestamp=${now()}`,
  })
}

export function getQrBaseImg(params: any) {
  return request.get({
    url: `/login/qr/create?timestamp=${now()}`,
    params,
  })
}

export function getQrPoiling(params: any) {
  return request.get({
    url: `/login/qr/check?timestamp=${now()}`,
    params,
  })
}

export function getUserInfo() {
  return request.get({
    url: `/user/account?timestamp=${now()}`,
  })
}

export function getUserSubInfo() {
  return request.get({
    url: `/user/subcount?timestamp=${now()}`,
  })
}

export function getUserLevel() {
  return request.get({
    url: `/user/level?timestamp=${now()}`,
  })
}
