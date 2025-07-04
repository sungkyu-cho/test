export const menu = [
  {
    id: '1',
    name: 'system',
    items: [
      {
        id: '1_1',
        name: 'user',
      },
      {
        id: '1_2',
        name: 'menu',
      },
      {
        id: '1_3',
        name: 'language',
      },
      {
        id: '1_4',
        name: 'authority',
      },
    ],
  },
  {
    id: '2',
    name: 'modeling',
    items: [
      {
        id: '2_1',
        name: 'parameter',
      },
      {
        id: '2_2',
        name: 'enum',
      },
      {
        id: '2_3',
        name: 'workflow',
      },
    ],
  },
  {
    id: '3',
    name: 'modeling',
    items: [
      {
        id: '3_1',
        name: 'deploy',
      },
      {
        id: '3_2',
        name: 'monitoring',
      },
    ],
  },
  {
    id: '4',
    name: 'history',
    items: [
      {
        id: '4_1',
        name: 'server history',
      },
      {
        id: '4_2',
        name: 'eap history',
      },
      {
        id: '4_3',
        name: 'alarm history',
      },
      {
        id: '4_4',
        name: 'logview',
      },
    ],
  },
];
export default {
  getMenu() {
    return menu;
  },
};