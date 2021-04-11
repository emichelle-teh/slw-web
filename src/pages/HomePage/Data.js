import programImg1 from '../../images/Program-Img-1.png';
import programImg2 from '../../images/Program-Img-2.png';
import programImg3 from '../../images/Program-Img-3.png';

import statisticsImg1 from '../../images/Statistics-Img-1.png';
import statisticsImg2 from '../../images/Statistics-Img-2.png';

import infoImg from '../../images/White.png';

export const coverObj = {
  primary: true,
  lightText: true,
  lightTextDesc: true,
  headline: 'Self Love Warrior Indonesia',
  description: 'Spreading mental health awaraness and self-love in Indonesia.',
  buttonLabel: 'Get Involed',
};

export const programsObj = {
    headline:'What do we do?', 
    subtitle:'We help youths and young adults across Indonesia through engaging programs to build a healthy self-love.',
}

export const cardsProgData = [
    {
        id: 1,
        imgUrl: programImg1, 
        alt: 'Program-Img-1',
        width:'183', 
        height:'160',
        cardTitle: 'Creative Content', 
        cardTextDesc: 'Bringing light to interesting topics',
        buttonLabel: 'Learn more',
    },
    {
        id: 2,
        imgUrl: programImg2, 
        alt: 'Program-Img-2',
        width:'191', 
        height:'144',
        cardTitle: 'Bootcamp and Support Group', 
        cardTextDesc: 'Bringing light to interesting topics',
        buttonLabel: 'Learn more',
    },
    {
        id: 3,
        imgUrl: programImg3, 
        alt: 'Program-Img-3',
        width:'169', 
        height:'151',
        cardTitle: 'International Webinars', 
        cardTextDesc: 'Bringing light to interesting topics',
        buttonLabel: 'Learn more',
    },
];

export const statisticsObjOne = {
    headline: 'Why should you care?',
    colPosition: false,
    textAlign: true,
    colPadding: true,
    heading: '20% teens experience depression before adulthood',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    start: false,
    imgUrl: statisticsImg1,
    alt: 'Statistics-Img-1',
    width:'400',
    height:'465',
}
export const statisticsObjTwo = {
    headline: '',
    colPosition: true,
    textAlign: false,
    colPadding: false,
    heading: 'Teens with low self-esteem are 4 times more likely to engage in risky behaviours',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    start: true,
    imgUrl: statisticsImg2,
    alt: 'Statistics-Img-2',
    width:'384',
    height:'381',
}

export const communityObj = {
    headline: 'Be a Self Love Warrior!',
}

export const cardsComData = [
    {
        id: 1,
        link: 'https://www.instagram.com/selflovewarrior.id/', 
        cardTitle: 'Instagram', 
        cardTextDesc: 'Follow SLW to learn about mental health issues, join IG Live sessions, and get the newest updates.',
        buttonLabel: 'Follow Instagram',
    },
    {
        id: 2,
        link: 'https://www.youtube.com/channel/UCxkUEZlfGOEntGoTnzxLq0w', 
        cardTitle: 'Youtube', 
        cardTextDesc: 'Watch SLW’s international webinars, tea-time, and original video productions.',
        buttonLabel: 'Subscribe Youtube',
    },
    {
        id: 3,
        link: '', 
        cardTitle: 'Discord', 
        cardTextDesc: 'Join SLW’s safe space by interacting in BookClub, Rants, Calming Exercises, and many more.',
        buttonLabel: 'Join Discord',
    },
    {
        id: 4,
        link: '', 
        cardTitle: 'Spotify', 
        cardTextDesc: 'Tune in to SLW’s audio bytes and podcast to discuss about mental health & lifestyles with professionals.',
        buttonLabel: 'Follow Spotify',
    },
];

export const infoObj = {
    headline: 'Let’s create an environment where talking about mental health is safe.',
    buttonLabel1: 'Contact Us',
    buttonLabel2: 'Join Our Newsletter',
    imageUrl: infoImg,
    imageName: 'Image',
}