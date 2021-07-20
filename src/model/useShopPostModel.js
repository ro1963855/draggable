export function createPost() {
  return new (() => ({
    id: Date.now(),
    imageUrl: 'https://fakeimg.pl/500x500/?text=Default',
    href: 'https://fakeimg.pl/500x500/?text=Default',
    title: '我是 Title',
    description: '我是 Description',
  }))
}