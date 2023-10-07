import colors from './colors';

export const routes = [
  {
    label: 'Dashboard',
    icon: 'th-large',
    route: 'dashboard',
    backgroundColor: colors.tertiaryContainer,
  },
  {
    label: 'Exams',
    icon: 'leanpub',
    route: 'exams',
    backgroundColor: colors.primaryContainer,
  },
  {
    label: 'Ask AI',
    icon: 'reddit-alien',
    route: 'ask-ai',
    backgroundColor: colors.secondaryContainer,
  },

  {
    label: 'Books',
    icon: 'book',
    route: 'books',
    backgroundColor: colors.errorContainer,
  },

  {
    label: 'C B Test',
    icon: 'laptop',
    route: 'computer-base-test',
    backgroundColor: colors.primaryContainer,
  },
  {
    label: 'Subscription',
    icon: 'dollar',
    route: 'subscription-prices',
    backgroundColor: colors.tertiaryContainer,
  },
  {
    label: 'Admin',
    icon: 'user-o',
    route: 'admin-dashboard',
    backgroundColor: colors.secondaryContainer,
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
