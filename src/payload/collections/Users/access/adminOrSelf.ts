import type { Access } from "payload";
import { checkRoles } from "@cms/collections/Users/utils/check-role";
import { ROLES } from "@cms/collections/Users/utils/roles";

export const adminOrSelf: Access = ({ req: { user }, id }) => {
	if (!user) return false;

	// allow users with a role of 'admin'
	if (checkRoles([ROLES.ADMIN as "admin"], user)) {
		return true;
	}

	// allow any other users to update only oneself
	return {
		id: {
			equals: user.id,
		},
	};
};
