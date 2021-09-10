export default [
  // GetUserInfo
  {
    url: "/article/list",
    type: "post",
    response: () => {
      return {
        code: 200,
        message: "成功",
        data: [
          {
            id: 1,
            title: "test1的专栏",
            description:
              "巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
          },
          {
            id: 2,
            title: "test2的专栏",
            description:
              "巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
          },
          {
            id: 3,
            title: "test3的专栏",
            description:
              "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧,巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
          },
          {
            id: 4,
            title: "test4的专栏",
            description:
              "巴拉巴拉巴拉卡巴拉那看那看看那可能卡年卡哪款那款男生科技大赛科技地科技司ID加上就嗲杰斯顿静安寺大祭司2加速度计的骄傲是大家收集2ID阿金斯大家啊司机",
          },
        ],
      };
    },
  },
  // getToken
  {
    url: "/auth/oauth/token",
    type: "post",
    response: () => {
      return {
        code: 200,
        message: "成功",
        data: {
          name: "testName",
        },
      };
    },
  },
];
