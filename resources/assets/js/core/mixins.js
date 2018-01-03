const toggleSidebar = {
  store: {
    sidebar: 'sidebar.open',
  },

  methods: {
    toggleSidebar (flag) {
      if (typeof flag === 'boolean') {
        this.sidebar = flag;
      } else {
        this.sidebar = ! this.sidebar;
      }
    },
  },
};

export {
  toggleSidebar,
};
