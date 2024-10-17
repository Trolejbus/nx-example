import { getJestProjectsAsync } from '@nx/jest';
import { ngMocks } from 'ng-mocks';

export default async () => ({
  projects: await getJestProjectsAsync(),
});

ngMocks.autoSpy('jest');
