type HobbyDataType = {
  index: number
  text: string
  mediaUrl: string
}
type HobbyArrayType = HobbyDataType[]
export const hobbyArray: HobbyArrayType = [
  {
    index: 0,
    text: 'Travelling alone with my backpack',
    mediaUrl: 'hobby-travel.webp'
  },
  {
    index: 1,
    text: 'Coding',
    mediaUrl: 'hobby-coding.webp'
  },
  {
    index: 2,
    text: 'Learning new things',
    mediaUrl: 'hobby-learn.webp'
  },
  {
    index: 3,
    text: 'Reading philosophy',
    mediaUrl: 'hobby-philo.webp'
  }
]
