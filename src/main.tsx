/**
 * Application entry point using the Skateboard Application Shell Architecture.
 *
 * The shell (`@stevederico/skateboard-ui`) owns routing, context, auth, layout and
 * theming. This file only declares the app's own views, the custom landing page,
 * and the lazy legal-document loader.
 *
 * @see {@link https://github.com/stevederico/skateboard|Skateboard Docs}
 */
import './assets/styles.css';
import { lazy, Suspense } from 'react';
import { createSkateboardApp } from '@stevederico/skateboard-ui/App';
import type { AppRoute } from '@stevederico/skateboard-ui/App';
import constants from './constants.json';

// Route-level code splitting: each view leaves the entry chunk.
const LandingView = lazy(() => import('./components/LandingView'));
const PreventionView = lazy(() => import('./components/PreventionView'));
const RisksView = lazy(() => import('./components/RisksView'));
const TestingView = lazy(() => import('./components/TestingView'));

/**
 * Application route configuration.
 *
 * Paths are relative to `/app` (no leading slash). The shell registers them,
 * guards them behind auth, and renders them inside the default Layout.
 */
export const appRoutes: AppRoute[] = [
  { path: 'prevention', element: <Suspense fallback={null}><PreventionView /></Suspense> },
  { path: 'risks', element: <Suspense fallback={null}><RisksView /></Suspense> },
  { path: 'testing', element: <Suspense fallback={null}><TestingView /></Suspense> }
];

createSkateboardApp({
  constants,
  appRoutes,
  defaultRoute: 'prevention',
  landingPage: <Suspense fallback={null}><LandingView /></Suspense>,
  // Legal bodies stay out of the main chunk; /terms /privacy /eula /subs load src/legal.json on demand.
  loadLegal: () => import('./legal.json')
});
