function getFormattedRoutes(app) {
  const routePaths = Array.from(app._router.stack, (m) => m.route?.path).filter(
    Boolean
  );

  const uniqueRoutePaths = Array.from(new Set(routePaths));

  const cleaned = uniqueRoutePaths.map((route) =>
    route.replace("/api/", "").replace("/api", "")
  );

  return uniqueRoutePaths;
}

export { getFormattedRoutes };
