/* eslint-disable */

export function getTokenFun() {
  wx.login({
    success: (res) => {
//          Info.set('code',res.code);
//          this.$store.dispatch('getToken',Info);
      console.log('code = ' + res.code)
      wx.setStorageSync('password', res.code)
      wx.getUserInfo({
        success: (res) => {
          wx.setStorageSync('loginName', res.userInfo.nickName)
          wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
          wx.setStorageSync('gender', res.userInfo.gender)// 性别 1:男性 0:女性
          wx.setStorageSync('encryptedData', res.encryptedData)
          wx.setStorageSync('iv', res.iv)
          // api.getToken()
          // api.getToken()
          //   .then((response) => {
          //     if (200 === response.data.code) {
          //       console.log('基础信息提交成功')
          //       api.submitBaseData()
          //     }
          //   })
          //   .catch(() => {
          //   })
        },
        fail: (res) => {
          console.log('获取用户信息失败')
          // openSettingBoard()
        }
      })
    }
  })
}

// 获取微信是否获取用户资料权限
export function jugeUserInfoAuth () {
  let p = new Promise((resolve,reject) => {
    wx.getSetting({
      success: (res) => {
        console.log('获取用户信息权限 = ' + res.authSetting['scope.userInfo'])
        if (!res.authSetting['scope.userInfo']) {
          reject()
        } else {
          resolve()
        }
      }
    })
  });
  return p;
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  wx.setStorageSync(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return wx.getStorageSync(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  wx.removeStorageSync(name)
}


export default wx
