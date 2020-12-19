import smallPhoto from '../../../img/userPhoto/RickSmall.jpg'
import largePhoto from '../../../img/userPhoto/RickLarge.jpg'

export const getProfileState = () => {
    return {
        userId: 1,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: 'Rick Sanchez',
        contacts: {
            github: 'https://github.com',
            vk: 'https://vk.com',
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
            website: 'https://mywebsite.com',
            youtube: 'https://youtube.com',
            mainLink: 'https://mainlink.com'
        },
        photos: {
            small: smallPhoto,
            large: largePhoto
        }
    }
}