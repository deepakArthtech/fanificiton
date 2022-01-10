export const getIcon=(icon)=>{
    switch (icon) {
        case 'eyeIcon':
            return require('../asserts/eye.png')
        case 'fbBtn':
            return require('../asserts/facebook.png')
        case 'googleBtn':
            return require('../asserts/google.png')
        case 'back':
            return require('../asserts/backArrow.png')
        case 'filter':
            return require('../asserts/filter2.png')
        case 'rewards':
            return require('../asserts/rewards.jpg')
        case 'offer':
            return require('../asserts/offer.png')
        case 'fGold':
            return require('../asserts/fGold.png')
        case 'giftIcon':
            return require('../asserts/giftIcon.png')
        case 'pen':
            return require('../asserts/pen.png')
        case 'messages':
            return require('../asserts/message.png')
        case 'bell':
            return require('../asserts/bell.png')
        case 'admin':
            return require('../asserts/admin.png')
        case 'settings':
            return require('../asserts/setting.png')
        case 'call':
            return require('../asserts/call.png')
        case 'face':
            return require('../assests/icons/notification.png')
        case 'addBook':
            return require('../asserts/addBook.png')
        case 'leftArrow':
            return require('../assests/icons/left_arrow.png')
        default:
            return 
    }
}