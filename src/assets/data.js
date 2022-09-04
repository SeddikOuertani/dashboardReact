const data = {
  links: [
    {
      linkName: "overview",
      sublinks: ["link 1", "link 2", "link3"],
      linkPath: "/linkPath1"
    },
    {
      linkName: "courses",
      sublinks: ["link 1", "link 2", "link3"],
      linkPath: "/linkPath1"
    },
    {
      linkName: "about",
      sublinks: ["link 1", "link 2", "link3"],
      linkPath: "/linkPath1"
    },
    {
      linkName: "settings",
      sublinks: ["link 1", "link 2", "link3"],
      linkPath: "/linkPath1"
    }
  ],
  asideLinks: {
    topLinks: [
      {
        linkName: "overview",
        iconName: ["fa", "pie-chart"],
        linkPath: "/overview"
      },
      {
        linkName: "courses",
        iconName: ["fa", "book"],
        linkPath: "/courses"
      },
      {
        linkName: "about",
        iconName: ["fa", "info-circle"],
        linkPath: "/about"
      },
      {
        linkName: "settings",
        iconName: ["fa", "gear"],
        linkPath: "/settings"
      }
    ],
    bottomLinks : [
      {
        linkName: "courses",
        iconName: ["fa", "book"],
        linkPath: "/linkPath1"
      },
      {
        linkName: "about",
        iconName: ["fa", "info-circle"],
        linkPath: "/linkPath1"
      },
      {
        linkName: "settings",
        iconName: ["fa", "gear"],
        linkPath: "/linkPath1"
      }
    ]
  }
}

export default data;
