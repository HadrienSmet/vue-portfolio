import hobbyCoding from '@/assets/images/hobby-coding.webp'
import hobbyLearning from '@/assets/images/hobby-learn.webp'
import hobbyPhilo from '@/assets/images/hobby-philo.webp'
import hobbyTravel from '@/assets/images/hobby-travel.webp'
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
    mediaUrl: hobbyTravel
  },
  {
    index: 1,
    text: 'Coding',
    mediaUrl: hobbyCoding
  },
  {
    index: 2,
    text: 'Learning new things',
    mediaUrl: hobbyLearning
  },
  {
    index: 3,
    text: 'Reading philosophy',
    mediaUrl: hobbyPhilo
  }
]
