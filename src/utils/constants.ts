import colors from './colors';

export const routes = [
  {
    label: 'Dashboard',
    icon: 'th-large',
    route: 'Home',
    backgroundColor: colors.tertiaryContainer,
    color: colors.onTertiaryContainer,
  },
  {
    label: 'Exams',
    icon: 'leanpub',
    route: 'Exams',
    backgroundColor: colors.primaryContainer,
    color: colors.onPrimaryContainer,
  },
  {
    label: 'Ask AI',
    icon: 'reddit-alien',
    route: 'AskAi',
    backgroundColor: colors.secondaryContainer,
    color: colors.primary,
  },

  {
    label: 'Books',
    icon: 'book',
    route: 'Books',
    backgroundColor: colors.tertiaryContainer,
    color: colors.onTertiaryContainer,
  },

  {
    label: 'C B Test',
    icon: 'laptop',
    route: 'CBT',
    backgroundColor: colors.primaryContainer,
    color: colors.onPrimaryContainer,
  },
  {
    label: 'Subscription',
    icon: 'dollar',
    route: 'Subscription',
    backgroundColor: colors.secondaryContainer,
    color: colors.primary,
  },
  {
    label: 'Videos',
    icon: 'video-camera',
    route: 'Videos',
    backgroundColor: colors.tertiaryContainer,
    color: colors.onTertiaryContainer,
  },
];
export const exams = [
  {
    id: 'beeba215e2',
    examName: 'JAMB',
  },
  {
    id: '35dc83a',
    examName: 'WASSCE',
  },
  {
    id: '7d15e2d52a',
    examName: 'NECO',
  },
  {
    id: 'eeb7d15e2d52a3',
    examName: 'POST-UTME',
  },
];

export const queryKeys = {
  questions: 'questions',
  subjects: 'subjects',
  allSubjects: 'allSubjects',
  users: 'users',
  currentUser: 'currentUser',
  usersApiUseage: 'usersApiUseage',
  registerUser: 'registerUser',
};
