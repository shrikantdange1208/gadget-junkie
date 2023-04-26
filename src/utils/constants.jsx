import { GiCowboyHolster, GiTripleScratches } from 'react-icons/gi'
import { MdHomeRepairService, MdCleaningServices } from 'react-icons/md'
import { TbAssembly } from 'react-icons/tb'
import { SiLotpolishairlines } from 'react-icons/si'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <MdHomeRepairService />,
    title: 'sofa repair',
    text: 'say goodbye to creaks, sags and tears. Get a sturdy & solid sofa.',
  },
  {
    id: 2,
    icon: <MdCleaningServices />,
    title: 'sofa cleaning',
    text: 'Remove stains.No more dust or funky smells lurking in nooks & crannies.',
  },
  {
    id: 3,
    icon: <GiCowboyHolster />,
    title: 'reupholstery',
    text: 'Choose from tons of design options for every decor style.',
  },
  {
    id: 4,
    icon: <GiTripleScratches />,
    title: 'scratch repair',
    text: 'Get rid of chips, scratches & dents. Give your sofa a new life.',
  },
  {
    id: 5,
    icon: <TbAssembly />,
    title: 'assembly and dismantling',
    text: 'Getting settled in? Let us dismantle or re-assemble your sofa for you.',
  },
  {
    id: 6,
    icon: <SiLotpolishairlines />,
    title: 'wood polishing',
    text: 'Restore your dull-looking sofa. Make it look fresh and brand-new.',
  },
]

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url = '/.netlify/functions/products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`
export const single_product_url = '/.netlify/functions/single-product?id='
