import colors from './colors';

export const routes = [
  {
    label: 'Dashboard',
    icon: 'th-large',
    route: 'dashboard',
    backgroundColor: colors.tertiaryContainer,
    color: colors.onTertiaryContainer,
  },
  {
    label: 'Exams',
    icon: 'leanpub',
    route: 'exams',
    backgroundColor: colors.primaryContainer,
    color: colors.onPrimaryContainer,
  },
  {
    label: 'Ask AI',
    icon: 'reddit-alien',
    route: 'ask-ai',
    backgroundColor: colors.secondaryContainer,
    color: colors.primary,
  },

  {
    label: 'Books',
    icon: 'book',
    route: 'books',
    backgroundColor: colors.tertiaryContainer,
    color: colors.onTertiaryContainer,
  },

  {
    label: 'C B Test',
    icon: 'laptop',
    route: 'computer-base-test',
    backgroundColor: colors.primaryContainer,
    color: colors.onPrimaryContainer,
  },
  {
    label: 'Subscription',
    icon: 'dollar',
    route: 'subscription-prices',
    backgroundColor: colors.secondaryContainer,
    color: colors.primary,
  },
  {
    label: 'Admin',
    icon: 'user-o',
    route: 'admin-dashboard',
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
