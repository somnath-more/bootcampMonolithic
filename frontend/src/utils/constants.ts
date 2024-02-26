import theme, { EXTRA_COLORS } from '../theme';
import Dashbrd from '../../public/assets/icons/dashboard.svg';
import Job from '../../public/assets/icons/jobs_standard.svg';
import Help from '../../public/assets/icons/help.svg';
import News from '../../public/assets/icons/events.svg';
import Practice from '../../public/assets/icons/notes.svg';
import SavedJobs from '../../public/assets/icons/save.svg';
import Settings from '../../public/assets/icons/settings.svg';
import Contact from '../../public/assets/icons/contact_us.svg';

export const HeadingsOfJobDetailSection = {
  SECTION1_BUTTON1: 'Save',
  SECTION1_BUTTON2: 'Apply',
  SECTION2_HEADING: 'Description',
  SECTION3_HEADING: 'What it takes',
  SECTION4_BUTTON: 'Green Commute Routes',
  SECTION4_UNSAVE: 'Unsave',
};

export const CommuteRouteOption = {
  SECTION3_MAIN: 'Your Options',
  SECTION3_SOURCE: 'Maredpally - ',
  SECTION3_DESTINATION: 'Hitech City',
  SECTION3_BUS_DESCRIPTION:
    'Catch a bus 38X at 3.42 PM to Secunderabad bus stand.',
  SECTION3_MAIN_COST: '65$ ',
  SECTION3_MAIN_DURATION: ' 58 mins',
  SECTION3_BUS_LATE: ' 2 mins late',
  SECTION3_BUS_COST: '10$ ',
  SECTION3_BUS_DURATION: '20 mins',
  SECTION3_VECTOR_DESCRIPTION: 'Head north on St. Johns road.',
  SECTION3_VECTOR_TIME: '2 mins',
  SECTION3_METRO_DESCRIPTION:
    'Catch a blue line metro towards Raidurg.',
  SECTION3_METRO_LATE: 'On time',
  SECTION3_METRO_COST: '55$ ',
  SECTION3_METRO_DURATION: ' 36 mins',
  SECTION3_GMAPS_DESCRIPTION: 'View in google maps',
  SECTION3_OLA: 'Ola',
  SECTION3_UBER: 'Uber',
  SECTION3_CAB_COST: 'Approx $30',
  SECTION3_CAB_BOOK: 'Book now',
  SECTION3_QUICK_RIDE: 'Quick Ride',
};

export const ButtonsOfFilterSection = {
  FIRST_SECTION_BUTTON: 'Filter',
  LAST_SECTION_BUTTON1: 'Clear all',
  LAST_SECTION_BUTTON2: 'Apply',
};

export const HeadingOfSidebar = {
  SIDEBAR_HEADING: 'Green Commute',
};

export const StepsInStepper = {
  STEPS: [
    {
      text: 'Your Location',
      children: 1,
    },
    {
      text: 'Job Location',
      children: 2,
    },
    {
      text: 'Your Skills',
      children: 3,
    },
  ],
};

export const TextInHomePage = {
  HEADING1: 'More than 2000 people are using Green Commute',
  LABEL: 'Where do you stay?',
  BUTTON1: 'Next',
  BUTTON2: 'Skip',
  BUTTON3: 'Back',
  BUTTON4: 'Finish',
};

export const JobListPageConst = {
  JOBDESCRIPTION:
    'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',
  WHATITTAKES: [
    'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.',
    'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.',
  ],
};

export const filterConstants = {
  distance: [
    { id: Math.random(), value: '0 - 10 kms', isChecked: false },
    {
      id: Math.random(),
      value: '21 - 30 kms',
      isChecked: false,
    },
    {
      id: Math.random(),
      value: '31 - 40 kms',
      isChecked: false,
    },
    {
      id: Math.random(),
      value: '41 - 50 kms',
      isChecked: false,
    },
  ],

  datePosted: [
    {
      id: Math.random(),
      value: 'Past 24hrs',
      isChecked: false,
    },
    {
      id: Math.random(),
      value: 'Past week',
      isChecked: false,
    },
    {
      id: Math.random(),
      value: 'Past month',
      isChecked: false,
    },
    {
      id: Math.random(),
      value: 'Anytime',
      isChecked: false,
    },
  ],

  jobType: [
    { id: Math.random(), value: 'Full-Time', isChecked: false },
    { id: Math.random(), value: 'Internship', isChecked: false },
    { id: Math.random(), value: 'Contract', isChecked: false },
    { id: Math.random(), value: 'Remote', isChecked: false },
  ],

  experienceLevel: [
    { id: Math.random(), value: 'Fresher', isChecked: false },
    { id: Math.random(), value: 'Mid-Level', isChecked: false },
    { id: Math.random(), value: 'Director', isChecked: false },
    { id: Math.random(), value: 'Executive', isChecked: false },
  ],
  transport: [
    { id: Math.random(), value: 'Metro', isChecked: false },
    { id: Math.random(), value: 'Moter Cycle', isChecked: false },
    { id: Math.random(), value: 'Bus', isChecked: false },
    { id: Math.random(), value: 'Car Pooling', isChecked: false },
  ],

  greenCommmute: [
    { id: 1, value: 'Yes', group: 1 },
    { id: 2, value: 'No', group: 1 },
  ],
};

export const filterProps = {
  checkBoxGroup: {
    distanceGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: filterConstants.distance,

      title: 'Distance',
    },
    jobTypeGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: filterConstants.jobType,

      title: 'Job Type',
    },
    datePostedGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: filterConstants.datePosted,

      title: 'Date Posted',
    },
    experienceLevelGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: filterConstants.experienceLevel,

      title: 'Experience Level',
    },
    transportGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: filterConstants.transport,

      title: 'Transport',
    },
  },

  radioBoxGroup: {
    greenCommuteGroup: {
      sxTypo: {
        color: `${EXTRA_COLORS.darkGrey}`,
        variants: `${theme.typography.body2}`,
      },

      txTypo: {
        color: `${theme.palette.grey[700]}`,
        variants: `${theme.typography.subtitle2}`,
      },

      data: filterConstants.greenCommmute,

      title: 'Green Commute',
    },
  },
};

export const SearchJobDetails = {
  PROFILE: ' Based on your profile, skills and search history',
};

export const DetailSectionConst = {
  JOB_DESCRPIPTION:
    'Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.',
  WHAT_IT_TAKES: [
    'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.',
    'High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.',
  ],
};

export interface JobCardInterface {
  id: number;
  logo: any;
  days: number;
  title: string;
  company: string;
  location: string;
  commute: string[];
  distance?: [];
  jobType?: [];
  datePosted?: [];
  experienceLevel?: [];
  greenCommute?: [];
  transport: [];
}

export interface ApiJobCardInterface {
  id: number;
  job: {
    title: string;
    skills: {
      skillName: string;
    }[];
  };
  company: {
    companyName: string;
    location: string;
    logo: string;
    companyCommutes: {
      commute: {
        routeOption: string;
      };
      isGeenCommute: string;
      distance: string;
    }[];
    city: {
      cityName: string;
      aqiValue: number;
    };
  };
  jobDescription: string;
  datePosted: string;
  jobType: string;
  experienceLevel: string;
  days: number;
}

export const DashboardItems = {
  list1: [
    {
      icon: Dashbrd,
      itemName: 'Dashboard',
      itemKey: '1',
    },
    {
      icon: Job,
      itemName: 'Find Jobs',
      itemKey: '2',
      path: '/searchJob',
    },
    {
      icon: SavedJobs,
      itemName: 'Saved Jobs',
      itemKey: '3',
      path: '/savedJobs',
    },
    {
      icon: Practice,
      itemName: 'Practice Test',
      itemKey: '4',
    },
    {
      icon: News,
      itemName: 'News & Events',
      itemKey: '5',
    },
  ],

  list2: [
    {
      icon: Help,
      itemName: 'Need Help?',
      itemKey: '6',
    },
    {
      icon: Contact,
      itemName: 'Contact Us',
      itemKey: '7',
    },
    {
      icon: Settings,
      itemName: 'Settings',
      itemKey: '8',
    },
  ],
};

export const commuteOptions = [
  {
    commute: {
      routeOption: 'train',
    },
  },
  {
    commute: {
      routeOption: 'car',
    },
  },
  {
    commute: {
      routeOption: 'bus',
    },
  },
  {
    commute: {
      routeOption: 'bike',
    },
  },
];
