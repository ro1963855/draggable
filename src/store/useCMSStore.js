import { ref } from "vue";
import { createPost } from "../model/useShopPostModel.js";
import { createImage } from "../model/useShopImageModel.js";

export const cmsData = ref([
  {
    id: 0,
    component: "Banner",
    data: {
      title: "我是 Banner",
    },
  },
  {
    id: 1,
    component: "Image",
    data: {
      images: [
        {
          id: 0,
          imageUrl: 'https://fakeimg.pl/500x500/?text=Hello',
          href: 'http://google.com',
        },
        {
          id: 1,
          imageUrl: 'https://fakeimg.pl/500x500/?text=World',
          href: 'http://google.com',
        },
        {
          id: 2,
          imageUrl: 'https://fakeimg.pl/500x500/?text=Taiwan',
          href: 'http://google.com',
        },
        {
          id: 3,
          imageUrl: 'https://fakeimg.pl/500x500/?text=No.1',
          href: 'http://google.com',
        },
      ],
    },
  },
  {
    id: 2,
    component: "Post",
    data: {
      posts: [
        {
          id: 0,
          imageUrl: 'https://cf.shopee.tw/file/cd8602144a7144e1e86e6d47d13b0d2c',
          href: 'https://cf.shopee.tw/file/cd8602144a7144e1e86e6d47d13b0d2c',
          title: '神奇寶貝',
          description: '皮卡丘，就決定是你了',
        },
        {
          id: 1,
          imageUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20180205/fb8af995ee1d4082a6e25f21eecf370f.jpeg',
          href: 'http://5b0988e595225.cdn.sohucs.com/images/20180205/fb8af995ee1d4082a6e25f21eecf370f.jpeg',
          title: '數碼寶貝',
          description: '被選剩的孩子',
        },
        {
          id: 2,
          imageUrl: 'https://cdn2.ettoday.net/images/682/d682087.jpg',
          href: 'https://cdn2.ettoday.net/images/682/d682087.jpg',
          title: '爆走兄弟',
          description: '炫風衝鋒龍捲風',
        },
        {
          id: 3,
          imageUrl: 'https://i.ytimg.com/vi/ycP3GsfuwM8/maxresdefault.jpg',
          href: 'https://i.ytimg.com/vi/ycP3GsfuwM8/maxresdefault.jpg',
          title: '小當家',
          description: '所以我說那個醬汁呢',
        },
      ],
    },
  },
 {
    id: 3,
    component: "Post",
    data: {
      posts: [
        {
          id: 0,
          imageUrl: 'https://cf.shopee.tw/file/cd8602144a7144e1e86e6d47d13b0d2c',
          href: 'https://cf.shopee.tw/file/cd8602144a7144e1e86e6d47d13b0d2c',
          title: '神奇寶貝',
          description: '皮卡丘，就決定是你了',
        },
        {
          id: 1,
          imageUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20180205/fb8af995ee1d4082a6e25f21eecf370f.jpeg',
          href: 'http://5b0988e595225.cdn.sohucs.com/images/20180205/fb8af995ee1d4082a6e25f21eecf370f.jpeg',
          title: '數碼寶貝',
          description: '被選剩的孩子',
        },
        {
          id: 2,
          imageUrl: 'https://cdn2.ettoday.net/images/682/d682087.jpg',
          href: 'https://cdn2.ettoday.net/images/682/d682087.jpg',
          title: '爆走兄弟',
          description: '炫風衝鋒龍捲風',
        },
        {
          id: 3,
          imageUrl: 'https://i.ytimg.com/vi/ycP3GsfuwM8/maxresdefault.jpg',
          href: 'https://i.ytimg.com/vi/ycP3GsfuwM8/maxresdefault.jpg',
          title: '小當家',
          description: '所以我說那個醬汁呢',
        },
      ],
    },
  },
]);

export function addPost(id) {
  const dataIdIndex = cmsData.value.findIndex(data => data.id === id)
  if (dataIdIndex === -1) {
    throw new Error('id not exist')
  }
  
  cmsData.value[dataIdIndex].data.posts.push(createPost())
}

export function addImage(id) {
  const dataIdIndex = cmsData.value.findIndex(data => data.id === id)
  if (dataIdIndex === -1) {
    throw new Error('id not exist')
  }
  
  cmsData.value[dataIdIndex].data.images.push(createImage())
}