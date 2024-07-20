/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    menu: Menu;
    media: Media;
    pages: Page;
    posts: Post;
    categories: Category;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    header: Header;
    footer: Footer;
    settings: Setting;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "menu".
 */
export interface Menu {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  caption?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  components?:
    | (
        | {
            accordion: {
              heading?: string | null;
              groups: {
                title?: string | null;
                content?: {
                  root: {
                    type: string;
                    children: {
                      type: string;
                      version: number;
                      [k: string]: unknown;
                    }[];
                    direction: ('ltr' | 'rtl') | null;
                    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                    indent: number;
                    version: number;
                  };
                  [k: string]: unknown;
                } | null;
                id?: string | null;
              }[];
            };
            options: {
              'bottom-spacing': 'default' | 'small' | 'medium' | 'large' | 'none';
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'accordion';
          }
        | {
            content: {
              content: {
                root: {
                  type: string;
                  children: {
                    type: string;
                    version: number;
                    [k: string]: unknown;
                  }[];
                  direction: ('ltr' | 'rtl') | null;
                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                  indent: number;
                  version: number;
                };
                [k: string]: unknown;
              };
            };
            options: {
              'bottom-spacing': 'default' | 'small' | 'medium' | 'large' | 'none';
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            'image-content': {
              content: {
                root: {
                  type: string;
                  children: {
                    type: string;
                    version: number;
                    [k: string]: unknown;
                  }[];
                  direction: ('ltr' | 'rtl') | null;
                  format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                  indent: number;
                  version: number;
                };
                [k: string]: unknown;
              };
              image: string | Media;
              'image-position': 'left' | 'right';
            };
            options: {
              'bottom-spacing': 'default' | 'small' | 'medium' | 'large' | 'none';
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'image-content';
          }
      )[]
    | null;
  publishedDate?: string | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title: string;
  publishedDate?: string | null;
  slug?: string | null;
  categories?: (string | Category)[] | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles: ('editor' | 'admin')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom' | 'menu') | null;
          newTab?: boolean | null;
          reference?:
            | ({
                relationTo: 'pages';
                value: string | Page;
              } | null)
            | ({
                relationTo: 'posts';
                value: string | Post;
              } | null);
          url?: string | null;
          'custom-menu'?: (string | null) | Menu;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  columns?:
    | {
        label: string;
        navItems?:
          | {
              link: {
                type?: ('reference' | 'custom' | 'menu') | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: 'pages';
                      value: string | Page;
                    } | null)
                  | ({
                      relationTo: 'posts';
                      value: string | Post;
                    } | null);
                url?: string | null;
                'custom-menu'?: (string | null) | Menu;
                label: string;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}