<template lang="pug">
.HU__app
  Outline.HU__app__outline
    ShopOutline(:list="list")
  Main.HU__app__main
    ShopPreview(:list="list")
</template>

<script>
import { ref } from "vue";
import Main from "./layouts/Main.vue";
import Outline from "./layouts/Outline.vue";
import ShopOutline from "./components/ShopOutline.vue";
import ShopPreview from "./components/ShopPreview.vue";

export default {
  name: "App",
  components: {
    Main,
    Outline,
    ShopOutline,
    ShopPreview,
  },
  setup() {
    const list = ref([
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

    return {
      list,
    };
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --gutter: 16px;
}

body {
  margin: 0;
}

.HU__app {
  display: flex;
  flex-direction: row;

  &__outline,
  &__main {
    height: 100vh;
    min-height: 100vh;
    overflow-y: auto;
  }

  &__outline {
    max-width: 300px;
    flex: 1 1 30%;
  }
}
</style>
