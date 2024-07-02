import type { CollectionBeforeOperationHook } from "payload";
import payload from "payload";

const sendEmailAfterCreate = async () => {
	try {
		await payload.sendEmail({
			to: "vuquangpham2909@gmail.com",
			subject: "This is a test email",
			text: "This is my message body",
		});
	} catch (error) {
		console.log(error);
	}
};

const beforeOperation: CollectionBeforeOperationHook = async ({
	args, // original arguments passed into the operation
	operation, // name of the operation
	req, // full Request object
}) => {
	if (operation === "create") {
		await sendEmailAfterCreate();
	}

	return args; // return modified operation arguments as necessary
};

export default beforeOperation;
