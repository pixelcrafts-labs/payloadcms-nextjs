import type { CollectionConfig } from "payload";
import { ROLES } from "./utils/roles";
import { admin } from "@cms/access/admin";
import { adminOrSelf } from "./access/admin-or-self";

export const Users: CollectionConfig = {
	slug: "users",

	admin: {
		defaultColumns: ["name", "email", "roles", "createdAt"],
		useAsTitle: "name",
	},
	access: {
		// admin: admin,
		create: admin,
		delete: admin,
		read: adminOrSelf,
	},
	auth: true,

	fields: [
		{
			name: "name",
			type: "text",
		},
		{
			name: "roles",
			type: "select",

			defaultValue: [ROLES.EDITOR],
			hasMany: true,
			required: true,
			access: {
				update: admin,
			},

			options: [
				{
					value: ROLES.EDITOR,
					label: "Editor",
				},
				{
					value: ROLES.ADMIN,
					label: "Admin",
				},
			],
		},
	],
};
