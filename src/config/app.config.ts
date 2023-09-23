interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Assessor', 'Content Creator'],
  tenantName: 'Client',
  applicationName: 'E-learning application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage assessment results',
    'Manage user assessments',
    'Manage answers',
    'Manage questions',
    'Manage assessments',
    'Manage users',
    'Manage clients',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6e2672db-89a3-4c1c-b705-2c4639d25e15',
};
