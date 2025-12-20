import type { NextConfig } from "next"
import { withPayload } from "@payloadcms/next/withPayload"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  serverExternalPackages: ['file-type'],
}

export default withPayload(nextConfig)
