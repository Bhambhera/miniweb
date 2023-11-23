import { ADD_CART, REMOVE_CART } from "./ProductTypes"

const initialState = [
    {
        id : 1,
        title : 'Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus',
        price : '10999',
        cart : false,
        category : 'Phone',
        imageUrl : 'https://m.media-amazon.com/images/I/81fVPmkBsIL._SL1500_.jpg'
    },
    {
        id : 2,
        title : 'HP Laptop 15s, 12th Gen Intel Core i3-1215U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Backlit KB, Thin & Light',
        price : '38,990',
        cart : false,
        category : 'Laptop',
        imageUrl : 'https://m.media-amazon.com/images/I/41-Z3UHKoQL._SY300_SX300_QL70_FMwebp_.jpg'
    },
    {
        id : 3,
        title : 'STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad, Non-Slip Rubber Base, Waterproof Surface, Premium-Textured, ',
        price : '99',
        cart : false,
        category : 'Mouse Pad',
        imageUrl : 'https://m.media-amazon.com/images/I/61zroMjd9FL._SL1500_.jpg'
    },
    {
        id : 4,
        title : 'LEOTUDE Men`s Loopknit Hooded Neck Sweatshirt with Side Pockets (Color Navy)',
        price : '566',
        cart : false,
        category : 'Clothes',
        imageUrl : 'https://m.media-amazon.com/images/I/61AbAJMZ2RL._SX679_.jpg'
    },
    {
        id : 5,
        title : 'Vega Crux ISI Certified Flip-Up Helmet for Men and Women with Clear Visor(Black, Size:L)',
        price : '1334',
        cart : false,
        category : 'Helmet',
        imageUrl : 'https://m.media-amazon.com/images/I/61eEetcCb9L._SL1500_.jpg'
    },
    {
        id : 6,
        title : 'Sparx mens Sd9039g Sneakers ',
        price : '768',
        cart : false,
        category : 'Shoes',
        imageUrl : 'https://m.media-amazon.com/images/I/71thnf-l9sL._SX695_.jpg'
    },
    {
        id : 7,
        title : 'Amazon Brand - INKAST Men Sweatshirt',
        price : '949',
        cart : false,
        category : 'Clothes',
        imageUrl : 'https://m.media-amazon.com/images/I/71wTpiOBMvL._SL1500_.jpg'

    },
    {
        id : 8,
        title : 'Dennis Lingo Men`s Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full',
        price : '423',
        cart : false,
        category : 'Clothes',
        imageUrl : 'https://m.media-amazon.com/images/I/61XzMtVz3PL._SY879_.jpg'

    },
    {
        id : 9,
        title : 'HP [SmartChoice] 15s, Ryzen 5-5500U, 16GB RAM/512GB SSD 15.6"(39.6 cm) FHD Laptop/Alexa Built-in/Windows 11 /AMD Radeon',
        price : '43,990',
        cart : false,
        category : 'Laptop',
        imageUrl : 'https://m.media-amazon.com/images/I/71yjoXu2ZAL._SL1500_.jpg'

    },
    {
        id : 10,
        title : 'Allen Solly Men`s Cotton Crew Neck Sweatshirt',
        price : '899',
        cart : false,
        category : 'Clothes',
        imageUrl : 'https://m.media-amazon.com/images/I/61Ljwe-hMIL._SY879_.jpg'

    },
    {
        id : 11,
        title : 'Acer Aspire Lite 11th Gen Intel Core i5 Premium Metal Laptop (8GB RAM/512GB SSD/Intel Iris Xe Graphics/Windows 11 Home) ',
        price : '37,730',
        cart : false,
        category : 'Laptop',
        imageUrl : 'https://m.media-amazon.com/images/I/41VMW5Dw5KL._SX300_SY300_QL70_FMwebp_.jpg'

    },
    {
        id : 12,
        title : 'Apple iPhone 13 (128GB) - Blue',
        price : '51,499',
        cart : false,
        category : 'Phone',
        imageUrl : 'https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY436_FMwebp_QL65_.jpg'

    },
    {
        id : 13,
        title : 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium',
        price : '1,55,900',
        cart : false,
        category : 'Phone',
        imageUrl : 'https://m.media-amazon.com/images/I/41037bXz-GL._SX300_SY300_QL70_FMwebp_.jpg'

    },
    {
        id : 14,
        title : 'Vibez by Lifelong Ruby 1.04" AMOLED Smartwatch for Women with Metal Strap, Bluetooth Calling, 60 Hz',
        price : '3,499',
        cart : false,
        category : 'Watch',
        imageUrl : 'https://m.media-amazon.com/images/I/61nOnLkSfBL._SL1500_.jpg'

    },
    {
        id : 15,
        title : 'realme narzo N53 (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display',
        price : '8,999',
        cart : false,
        category : 'Phone',
        imageUrl : 'https://m.media-amazon.com/images/I/41dEcQR7UnL._SX300_SY300_QL70_FMwebp_.jpg'

    },
    {
        id : 16,
        title : 'Safari Pentagon 65 cms Medium Check-in Polypropylene (PP) Hard Sided 4 Wheels 360 Degree Rotation',
        price : '2,699',
        cart : false,
        category : 'Suitcase',
        imageUrl : 'https://m.media-amazon.com/images/I/51zzUcG6EKL._SL1500_.jpg'

    },
    {
        id : 17,
        title : 'American Tourister Jamaica 80 Cms Large Check-in Polyester Soft Sided 4 Spinner Wheels Luggage (Wine Red)',
        price : '4,999',
        cart : false,
        category : 'Suitcase',
        imageUrl : 'https://m.media-amazon.com/images/I/91weq3mK2TL._SL1500_.jpg'

    },
    {
        id : 18,
        title : 'Titan Neo Analog Dial Men`s Watch',
        price : '13865',
        cart : false,
        category : 'Watch',
        imageUrl : 'https://m.media-amazon.com/images/I/712B-FSfXqS._SL1500_.jpg'

    },
    {
        id : 19,
        title : 'Fastrack New Limitless Glide Advanced UltraVU HD Display|BT Calling|ATS Chipset|100+ Sports Modes & Watchfaces|Calculator|Voice Assistant',
        price : '1,699',
        cart : false,
        category : 'Watch',
        imageUrl : 'https://m.media-amazon.com/images/I/61JtVmcxb0L._SL1080_.jpg'

    }
]
const productReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_CART : {
            const itemId = action.payload
            return state.map(item => 
                item.id === itemId ? {...item, cart : true} : item
                ) 
        }
        case REMOVE_CART : {
            const itemId = action.payload
            return state.map(item => 
                item.id === itemId ? {...item, cart : false} : item
                ) 
        }
        default : {
            return state
        }
    }
}

export default productReducer