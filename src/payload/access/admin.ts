import type { FieldAccess } from "payload";
import type { User } from "@cms/payload-types";
import { checkRoles } from "@cms/collections/Users/utils/check-role";
import { ROLES } from "../collections/Users/utils/roles";

export const admin: FieldAccess = ({ req: { user } }) =>
	checkRoles([ROLES.ADMIN as "admin"], user as User);
