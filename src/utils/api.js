const getLatestTopic = function (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    })
  });
}

const getProductList = function (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        resolve(res.data);
      },
      fail (err) {
        reject(err);
      }
    })
  });
}

export const info =  {
  getLatestTopic,
}

export const ProductApi = {
  getProductList
}
