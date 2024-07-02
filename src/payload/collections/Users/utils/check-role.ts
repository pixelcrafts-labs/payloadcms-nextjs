import type { User } from "@cms/payload-types";

export const checkRoles = (roles: User["roles"] = [], user?: User): boolean => {
	if (!user) return false;
	const isFounded = roles?.some((role) =>
		user.roles?.some((individualRole) => individualRole === role)
	);
	return Boolean(isFounded);
};
