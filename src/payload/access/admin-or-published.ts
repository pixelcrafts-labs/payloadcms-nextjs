import type { Access } from "payload";
import { checkRoles } from "@cms/collections/Users/utils/check-role";
import { ROLES } from "@cms/collections/Users/utils/roles";

export const adminsOrPublished: Access = ({ req: { user } }) => {
	if (user && checkRoles([ROLES.ADMIN as "admin"], user)) {
		return true;
	}

	return {
		_status: {
			equals: "published",
		},
	};
};
