
export default [
    // GetUserInfo
    {
      url: '/user/info',
      type: 'get',
      response: () => {
        return {
          code: 200,
          message: '成功',
          data: {
            name: '柏特_Better',
            
          },
        };
      },
    },
    // getToken
    {
      url: '/auth/oauth/token',
      type: 'post',
      response: () => {
        return {
          code: 200,
          message: '成功',
          data: {
            name: 'testName',
          },
        };
      },
    },
  ];
  
