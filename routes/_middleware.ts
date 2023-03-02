import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 543,
  site: "drivencx",
  domains: ["drivencx.deco.site"],
});