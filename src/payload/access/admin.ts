import type { AccessArgs } from "payload";
import type { User } from "@cms/payload-types";
import { checkRoles } from "@cms/collections/Users/utils/check-role";
import { ROLES } from "../collections/Users/utils/roles";

type isAdmin = (args: AccessArgs<User>) => boolean;

export const admin: isAdmin = ({ req: { user } }) =>
	checkRoles([ROLES.ADMIN as "admin"], user as User);
