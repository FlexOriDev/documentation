import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  tutorialSidebar: [
    'tutorial/intro',
    {
      type: 'category',
      label: 'Tutorial - Basics',
      items: [
        'tutorial/tutorial-basics/create-a-page',
        'tutorial/tutorial-basics/create-a-document',
        'tutorial/tutorial-basics/markdown-features',
        'tutorial/tutorial-basics/congratulations',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial - Extras',
      items: [
        'tutorial/tutorial-extras/manage-docs-versions',
        'tutorial/tutorial-extras/translate-your-site',
      ],
    },
  ],
  foodTrackerSidebar: [
    'food-tracker/intro',
    {
      type: 'category',
      label: 'Metier',
      items: [
        'food-tracker/metier/sfd',
      ],
    },
    {
      type: 'category',
      label: 'Technique',
      items: [
        'food-tracker/technique/dat',
        'food-tracker/technique/dct',
        'food-tracker/technique/mmdd',
        {
          type: 'category',
          label: 'Frontend',
          items: [
            'food-tracker/technique/front/routes',
          ],
        },
        {
          type: 'category',
          label: 'Backend',
          items: [
            'food-tracker/technique/back/api',
          ],
        },
      ],
    },
  ],
  figma: [
    'figma/intro',
  ],
};

export default sidebars;