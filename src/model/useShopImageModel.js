export function createImage() {
  return new (() => (        {
    id: Date.now(),
    imageUrl: 'https://fakeimg.pl/500x500/?text=Default',
    href: 'https://fakeimg.pl/500x500/?text=Default',
  }))
}