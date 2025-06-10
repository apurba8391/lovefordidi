new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "image/family1.jpeg",
           img3: "image/family2.jpeg",
          img2: "image/family3.jpeg",
          title: "COUPLE",
          isOpen: false,
        },
        {
          img1: "image/saree1.jpeg",
          img2: "image/saree2.jpeg",
          img3: "image/saree3.jpeg",
          title: "SAREE",
          isOpen: false,
        },
        {
          img1: "image/cute1.jpeg",
          img2: "image/cute2.jpeg",
          img3: "image/cute3.jpeg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "image/ghibli1.jpeg",
          img2: "image/ghibli2.jpeg",
          img3: "image/ghibli3.jpeg",
          title: "GHIBLI",
          isOpen: false,
        },
        {
          img1: "image/birthday1.jpeg",
          img2: "image/birthday2.jpeg",
          img3: "image/birthday3.jpeg",
          title: "BIRTHDAY",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
