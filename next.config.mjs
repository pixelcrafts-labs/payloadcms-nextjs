import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Your Next.js config here

	// https://react.dev/learn/react-compiler#usage-with-nextjs
	experimental: {
		reactCompiler: true,
	},
};

export default withPayload(nextConfig);
