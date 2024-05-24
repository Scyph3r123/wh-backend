import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjectAwards extends Schema.Component {
  collectionName: 'components_project_awards';
  info: {
    displayName: 'Awards';
    icon: 'star';
  };
  attributes: {
    Title: Attribute.String;
    Logo: Attribute.Media;
    description: Attribute.Text;
    year: Attribute.BigInteger;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'project.awards': ProjectAwards;
    }
  }
}
