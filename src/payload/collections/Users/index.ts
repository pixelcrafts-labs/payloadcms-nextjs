import type { CollectionConfig } from "payload";
import { ROLES } from "./utils/roles";

export const Users: CollectionConfig = {
	slug: "users",
	admin: {
		useAsTitle: "email",
	},
	auth: true,
	fields: [
		// Email added by default
		// Add more fields as needed
		{
			name: "roles",
			type: "select",

			defaultValue: [ROLES.USER],
			hasMany: true,

			options: [
				{
					value: ROLES.USER,
					label: "User",
				},
				{
					value: ROLES.ADMIN,
					label: "Admin",
				},
			],
		},
	],
};
