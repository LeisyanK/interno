import { createStore } from 'vuex'

export default createStore({
  state: {
    articles: [],
    // articles: [
    //   {
    //     id: 1,
    //     img: require("@/assets/img/blog/kitchen1.jpg"),
    //     tag: 'Kitchen Design',
    //     heading: 'Let’s Get Solution For Building Construction Work',
    //     text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
    //     date: '26 December,2022',
    //   },
    //   {
    //     id: 2,
    //     img: require("@/assets/img/blog/living1.jpg"),
    //     tag: 'Living Design',
    //     heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
    //     date: '22 December,2022'
    //   },
    //   {
    //     id: 3,
    //     img: require("@/assets/img/blog/interior1.jpg"),
    //     tag: 'Interior Design',
    //     heading: 'Best For Any Office & Business Interior Solution',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
    //     date: '25 December,2022'
    //   },
    //   {
    //     id: 4,
    //     img: require("@/assets/img/blog/kitchen2.jpg"),
    //     tag: 'Kitchen Design',
    //     heading: 'Let’s Get Solution For Building Construction Work',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
    //     date: '26 December,2022'
    //   },
    //   {
    //     id: 5,
    //     img: require("@/assets/img/blog/living2.jpg"),
    //     tag: 'Living Design',
    //     heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
    //     date: '22 December,2022'
    //   },
    //   {
    //     id: 6,
    //     img: require("@/assets/img/blog/interior2.jpg"),
    //     tag: 'Interior Design',
    //     heading: 'Best For Any Office & Business Interior Solution',
    //     text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
    //     date: '25 December,2022'
    //   },
    //   {
    //     id: 7,
    //     img: require("@/assets/img/blog/Architecture1.jpg"),
    //     tag: 'Architecture Design',
    //     heading: 'Best For Any Office & Business Architecture Solution',
    //     text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
    //     date: '22 December,2022'
    //   },
    //   {
    //     id: 8,
    //     img: require("@/assets/img/blog/Architecture2.jpg"),
    //     tag: 'Architecture Design',
    //     heading: 'Low Cost Latest Invented Architecture Designing \nIdeas.',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
    //     date: '28 December,2022'
    //   },
    //   {
    //     id: 9,
    //     img: require("@/assets/img/blog/bedroom1.jpg"),
    //     tag: 'Bedroom Design',
    //     heading: 'Latest Invented Bedroom Designing \nIdeas.',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus unde quae non architecto quaerat, iure ipsum temporibus cum corrupti illo minus! Reprehenderit ab sunt libero fuga iste eveniet molestias. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident, nihil minus, atque perspiciatis obcaecati distinctio mollitia tempora molestiae non doloremque ipsa architecto quis facilis beatae. Dicta eligendi nostrum et?',
    //     date: '27 December,2022'
    //   },
    //   {
    //     id: 10,
    //     img: require("@/assets/img/blog/bedroom2.jpg"),
    //     tag: 'Bedroom Design',
    //     heading: 'Design sprints are great',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum illum! Eos eaque unde natus minima odio, illo delectus non id laudantium magni voluptatem alias eveniet, ea dignissimos sint excepturi similique repellat in quam. \nAmet fuga provident vel enim beatae mollitia, pariatur itaque minima ut, consectetur corrupti eveniet repellat suscipit?',
    //     date: '17 December,2022'
    //   },
    // ],
    projects: [
      {
        id: 1,
        tag: 'Bedroom',
        title: 'Minimal Bedroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/index/project1.jpg"), require("@/assets/img/projects/bedroom1.jpg"), require("@/assets/img/projects/bedroom2.jpg"), require("@/assets/img/projects/bedroom3.jpg")],
        like: true,
        text: 'Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquamsem vitae turpis dignissim maximus.Aliquam sollicitudin tellumassa, vbel maximus purus posuere in.Dojrices gravida dignissim.Praesent at nibh in mi fringilla mattis.Phasellus ut dolor odio.Aenean in the ipsum vel lectus bibendum commodo. \nIn nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purus porttitor.'
      },
      {
        id: 2,
        tag: 'Bedroom',
        title: 'Classic Minimal Bedroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/index/project2.jpg"), require("@/assets/img/projects/bedroom2.jpg"), require("@/assets/img/projects/bedroom3.jpg"), require("@/assets/img/projects/bedroom4.jpg")],
        like: false,
        text: 'Project 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam vel aspernatur placeat aperiam eum dolorem distinctio nesciunt, esse eos?'
      },
      {
        id: 3,
        tag: 'Bedroom',
        title: 'Minimal Bedroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/index/project3.jpg"), require("@/assets/img/projects/bedroom3.jpg"), require("@/assets/img/projects/bedroom4.jpg"), require("@/assets/img/projects/bedroom5.jpg")],
        like: false,
        text: 'Project 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.'
      },
      {
        id: 4,
        tag: 'Bedroom',
        title: 'Minimal Bedroom table',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/index/project4.jpg"), require("@/assets/img/projects/bedroom4.jpg"), require("@/assets/img/projects/bedroom5.jpg"), require("@/assets/img/projects/bedroom6.jpg")],
        like: false,
        text: 'Project 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus debitis sunt dolor! Cum quos facere animi ad tempore totam, alias dolorum temporibus, debitis quisquam minus eveniet exercitationem? Quidem, voluptas!'
      },
      {
        id: 5,
        tag: 'Bedroom',
        title: 'Modern Bedroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/bedroom5.jpg"), require("@/assets/img/projects/bedroom6.jpg"), require("@/assets/img/projects/bedroom7.jpg")],
        like: false,
        text: 'Project 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis autem nemo animi provident error est hic accusamus eaque tempora aliquam! Ad commodi unde aliquam perferendis aperiam. Debitis, distinctio itaque.'
      },
      {
        id: 6,
        tag: 'Bedroom',
        title: 'Modern Bedroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/bedroom6.jpg"), require("@/assets/img/projects/bedroom7.jpg"), require("@/assets/img/projects/bedroom8.jpg")],
        like: true,
        text: 'Project 6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.'
      },
      {
        id: 7,
        tag: 'Bedroom',
        title: 'System Table',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/bedroom7.jpg"), require("@/assets/img/projects/bedroom8.jpg"), require("@/assets/img/projects/bedroom1.jpg")],
        like: false,
        text: 'Project 7. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quae ducimus voluptatibus rem! Id, eius. Consequuntur eligendi tempora cumque quos, fugit pariatur! Praesentium tenetur sint, nostrum ea officia iusto! Illo.'
      },
      {
        id: 8,
        tag: 'Bedroom',
        title: 'Modern Bedroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/bedroom8.jpg"), require("@/assets/img/projects/bedroom1.jpg"), require("@/assets/img/projects/bedroom2.jpg")],
        like: false,
        text: 'Project 8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia labore praesentium sed, similique, itaque expedita, optio exercitationem est odio quas rem nulla maiores laboriosam harum distinctio iste numquam iure.'
      },
      {
        id: 9,
        tag: 'Bathroom',
        title: 'Minimal Bathroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/bathroom1.jpg"), require("@/assets/img/projects/bathroom2.jpg"), require("@/assets/img/projects/bathroom3.jpg")],
        like: false,
        text: 'Project 9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.'
      },
      {
        id: 10,
        tag: 'Bathroom',
        title: 'Modern Bathroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/bathroom2.jpg"), require("@/assets/img/projects/bathroom3.jpg"), require("@/assets/img/projects/bathroom4.jpg")],
        like: false,
        text: 'Project 10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia labore praesentium sed, similique, itaque expedita, optio exercitationem est odio quas rem nulla maiores laboriosam harum distinctio iste numquam iure.'
      },
      {
        id: 11,
        tag: 'Bathroom',
        title: 'Classic Minimal Bathroom',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/bathroom3.jpg"), require("@/assets/img/projects/bathroom4.jpg"), require("@/assets/img/projects/bathroom1.jpg")],
        like: true,
        text: 'Project 11. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis autem nemo animi provident error est hic accusamus eaque tempora aliquam! Ad commodi unde aliquam perferendis aperiam. Debitis, distinctio itaque.'
      },
      {
        id: 12,
        tag: 'Bathroom',
        title: 'Modern Bathroom',
        links: 'Decor / Architecture', img: [require("@/assets/img/projects/bathroom4.jpg"), require("@/assets/img/projects/bathroom2.jpg"), require("@/assets/img/projects/bathroom3.jpg")],
        like: false,
        text: 'Project 12. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.'
      },
      {
        id: 13,
        tag: 'Living Area',
        title: 'Minimal Living Area',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/living1.jpg"), require("@/assets/img/projects/living2.jpg"), require("@/assets/img/projects/living3.jpg")],
        like: true,
        text: 'Project 13. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.'
      },
      {
        id: 14,
        tag: 'Kitchen',
        title: 'Modern Kitchen',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/kitchen1.jpg"), require("@/assets/img/projects/kitchen2.jpg"), require("@/assets/img/projects/kitchen3.jpg")],
        like: false,
        text: 'Project 14. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro mollitia labore praesentium sed, similique, itaque expedita, optio exercitationem est odio quas rem nulla maiores laboriosam harum distinctio iste numquam iure.'
      },
      {
        id: 15,
        tag: 'Kitchen',
        title: 'Minimal Kitchen',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/kitchen2.jpg"), require("@/assets/img/projects/kitchen3.jpg"), require("@/assets/img/projects/kitchen4.jpg")],
        like: false,
        text: 'Project 15. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quae ducimus voluptatibus rem! Id, eius. Consequuntur eligendi tempora cumque quos, fugit pariatur! Praesentium tenetur sint, nostrum ea officia iusto! Illo.'
      },
      {
        id: 16,
        tag: 'Living',
        title: 'Modern Living Area',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/living2.jpg"), require("@/assets/img/projects/living3.jpg"), require("@/assets/img/projects/living1.jpg")],
        like: false,
        text: 'Project 16. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quae ducimus voluptatibus rem! Id, eius. Consequuntur eligendi tempora cumque quos, fugit pariatur! Praesentium tenetur sint, nostrum ea officia iusto! Illo.'
      },
      {
        id: 17,
        tag: 'Living',
        title: 'Classic Minimal Living Area',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/living3.jpg"), require("@/assets/img/projects/living2.jpg"), require("@/assets/img/projects/living1.jpg")],
        like: false,
        text: 'Project 17. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.'
      },
      {
        id: 18,
        tag: 'Kitchen',
        title: 'Classic Minimal Kitchen',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/kitchen2.jpg"), require("@/assets/img/projects/kitchen3.jpg"), require("@/assets/img/projects/kitchen4.jpg")],
        like: true,
        text: 'Project 18. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, facilis autem nemo animi provident error est hic accusamus eaque tempora aliquam! Ad commodi unde aliquam perferendis aperiam. Debitis, distinctio itaque.'
      },
      {
        id: 19,
        tag: 'Kitchen',
        title: 'Minimal Kitchen',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/kitchen3.jpg"), require("@/assets/img/projects/kitchen4.jpg"), require("@/assets/img/projects/kitchen5.jpg")],
        like: false,
        text: 'Project 19. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci commodi quibusdam sequi minima, voluptatem velit. Facilis ut similique quisquam vel sunt quae sed, vitae unde, obcaecati voluptate consequatur ea.'
      },
      {
        id: 20,
        tag: 'Kitchen',
        title: 'Modern Kitchen',
        links: 'Decor / Architecture',
        img: [require("@/assets/img/projects/kitchen4.jpg"), require("@/assets/img/projects/kitchen5.jpg"), require("@/assets/img/projects/kitchen1.jpg")],
        like: false,
        text: 'Project 20. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, obcaecati ducimus. Recusandae, possimus qui deserunt quisquam accusamus perferendis odio, nostrum voluptatibus iste dolores, nisi autem quibusdam velit beatae iure magnam.'
      },
    ],
    bannerInfo: [
      { pagePath: '/projects', img: require("@/assets/img/projects/projectBanner.jpg"), heading: 'Our Project', pageName: 'Project' },
      { pagePath: '/articles', img: require("@/assets/img/blog/banner.jpg"), heading: 'Articles & News', pageName: 'Blog' },
    ],
    projectTags: [
      { text: "Bathroom", active: false },
      { text: "Bedroom", active: true },
      { text: "Kitchen", active: false },
      { text: "Living Area", active: false },
    ],
    articleTags: [
      { text: "Kitchen", active: false },
      { text: "Bedroom", active: true },
      { text: "Living", active: false },
      { text: "Architecture", active: false },
      { text: "Kitchen Planning", active: false },
      { text: "Bathroom", active: false },
    ],
    pageLinks: [
      {
        id: 1,
        title: "Home",
        url: "/"
      },
      {
        id: 2,
        title: "Project",
        url: "/project"
      },
      {
        id: 3,
        title: "Blog",
        url: "/blog"
      },      
      // {
      //   id: 4,
      //   title: "blogDetails",
      //   url: "/blog/details"
      // },
      // {
      //   id: 5,
      //   title: "projectDetails",
      //   url: "/project/details"
      // },
    ],
    projectDetailsLink: [
      {
        id: 1,
        title: "projectDetails",
        url: "/project/details"
      },
    ]
  },
  getters: {
    getProjectDetailsLink(state) {
      return state.projectDetailsLink;
    },
    getLinks(state) {
      return state.pageLinks;
    },
    getThreeArticles(state) {
      return state.articles.slice(0, 3);
    },
    getSixArticles(state) {
      return state.articles.slice(0, 6);
    },
    getArticleTags(state) {
      return state.articleTags;
    },
    getProjectTags(state) {
      return state.projectTags;
    },
    getAllArticles(state) {
      return state.articles;
    },
    // фильтрация статей по тегу
    getFilteredArticles(state) {
      const selectedTag = state.articleTags.filter(tag => tag.active == true);
      console.log(selectedTag[0]);
      // console.log(state.articleTags);
      
      // let filteredArticles = state.articles.filter(article => article.tag == selectedTag[0].text);
      if (selectedTag[0] == undefined) {
        selectedTag[0] = { text: 'Bedroom', active: true };
      }
      let filteredArticles = state.articles.filter(article => article.tag.includes(selectedTag[0].text));
      // console.log(filteredArticles);
      return filteredArticles;
    },
    // фильтрация проектов по тегу
    getFilteredProjects(state) {
      const selectedTag = state.projectTags.filter(tag => tag.active == true);
      // console.log(selectedTag[0].text);
      return state.projects.filter(project => project.tag == selectedTag[0].text);
      // return state.projects.filter(project => selectedTag[0].text.include(project.tag));
    },
    getImagesForSlider(state, projectId) {
      images = state.projects.filter(project => project.id === projectId).img;
      console.log(images);
      return images;
    },
    getImages(state) {
      // images = state.projects.filter(project => project.id == 1).img;
      state.projects.forEach(project => {
        console.log(project);
        if (project.id === 1) {
          console.log(true);
          console.log(project.img);
          return project.img[0];
        }
      });
      return require("@/assets/img/NotFound.jpg");
      // console.log(images);
      // return images;
    }
  },
  mutations: {
    SET_DATA(state, data) {
      state.articles = data;
    },
    // 
    LOAD_ARTICLE_TAG(state, tag) {
      console.log(tag);
      console.log(state.articleTags);

      state.articleTags.forEach(articleTag => {
        console.log(tag, articleTag.text);
        // if (articleTag.text == tag.text) {
        if (tag.includes(articleTag.text)) {
          articleTag.active = true;
        } else {
          articleTag.active = false;
        }
      })
      console.log(state.articleTags);
    },
    // переключение тега статей
    // получаем объект тега из компонента
    CHANGE_ARTICLE_TAG(state, tag) {
      console.log(tag);
      console.log(state.articleTags);

      state.articleTags.forEach(articleTag => {
        console.log(tag, articleTag.text);
        if (articleTag.text == tag.text) {
        // if (tag.includes(articleTag.text)) {
          articleTag.active = true;
        } else {
          articleTag.active = false;
        }
      })
      console.log(state.articleTags);
    },
    // переключение тега проектов
    // получаем текст тега из компонента
    CHANGE_TAG(state, tag) {
      state.projectTags.forEach(projectTag => {
        if (projectTag.text == tag) {
          projectTag.active = true;
        } else {
          projectTag.active = false;
        }
      });
    },
    CHANGE_LIKE(state, id) {
      // state.projects.filter( project => project.id === id).like = false;
      // console.log(id);
      state.projects.forEach( project => {
        if (project.id == id) {
          project.like = !project.like;}
        })
    },
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const dataFromServer = [
          {
            id: 1,
            img: require("@/assets/img/blog/kitchen1.jpg"),
            tag: 'Kitchen Design',
            heading: 'Let’s Get Solution For Building Construction Work',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
            date: '26 December,2022',
          },
          {
            id: 2,
            img: require("@/assets/img/blog/living1.jpg"),
            tag: 'Living Design',
            heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
            date: '22 December,2022'
          },
          {
            id: 3,
            img: require("@/assets/img/blog/interior1.jpg"),
            tag: 'Interior Design',
            heading: 'Best For Any Office & Business Interior Solution',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
            date: '25 December,2022'
          },
          {
            id: 4,
            img: require("@/assets/img/blog/kitchen2.jpg"),
            tag: 'Kitchen Design',
            heading: 'Let’s Get Solution For Building Construction Work',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, officiis placeat perferendis laudantium sit adipisci pariatur hic unde. Doloribus, nihil. Delectus natus accusantium pariatur tempore consectetur unde ipsum reprehenderit perferendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. \nCorporis incidunt doloremque nostrum, necessitatibus perspiciatis, soluta molestiae vitae voluptatibus quae laborum temporibus voluptate amet sed! Quaerat laboriosam possimus perferendis ut fugit.',
            date: '26 December,2022'
          },
          {
            id: 5,
            img: require("@/assets/img/blog/living2.jpg"),
            tag: 'Living Design',
            heading: 'Low Cost Latest Invented Interior Designing \nIdeas.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
            date: '22 December,2022'
          },
          {
            id: 6,
            img: require("@/assets/img/blog/interior2.jpg"),
            tag: 'Interior Design',
            heading: 'Best For Any Office & Business Interior Solution',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
            date: '25 December,2022'
          },
          {
            id: 7,
            img: require("@/assets/img/blog/Architecture1.jpg"),
            tag: 'Architecture Design',
            heading: 'Best For Any Office & Business Architecture Solution',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laudantium fuga, incidunt rem tenetur non earum inventore quo ab sapiente dicta. Ratione aliquam corrupti dolorum aut tempore debitis possimus modi. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius reprehenderit iure atque dolor, numquam consequuntur ab, deleniti illum at obcaecati? Error nesciunt cum magnam, nostrum eveniet eius voluptates totam?',
            date: '22 December,2022'
          },
          {
            id: 8,
            img: require("@/assets/img/blog/Architecture2.jpg"),
            tag: 'Architecture Design',
            heading: 'Low Cost Latest Invented Architecture Designing \nIdeas.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta quaerat enim eius dolores autem nihil debitis delectus, magni porro consectetur quo minus veniam corporis incidunt hic eveniet. Rerum, illo? \nLorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit expedita doloremque modi voluptate, vitae cupiditate a autem. Repellendus dolores nihil minima dolorem quam vero ipsam iure adipisci quos. Sed, mollitia!',
            date: '28 December,2022'
          },
          {
            id: 9,
            img: require("@/assets/img/blog/bedroom1.jpg"),
            tag: 'Bedroom Design',
            heading: 'Latest Invented Bedroom Designing \nIdeas.',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus unde quae non architecto quaerat, iure ipsum temporibus cum corrupti illo minus! Reprehenderit ab sunt libero fuga iste eveniet molestias. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum provident, nihil minus, atque perspiciatis obcaecati distinctio mollitia tempora molestiae non doloremque ipsa architecto quis facilis beatae. Dicta eligendi nostrum et?',
            date: '27 December,2022'
          },
          {
            id: 10,
            img: require("@/assets/img/blog/bedroom2.jpg"),
            tag: 'Bedroom Design',
            heading: 'Design sprints are great',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, cum illum! Eos eaque unde natus minima odio, illo delectus non id laudantium magni voluptatem alias eveniet, ea dignissimos sint excepturi similique repellat in quam. \nAmet fuga provident vel enim beatae mollitia, pariatur itaque minima ut, consectetur corrupti eveniet repellat suscipit?',
            date: '17 December,2022'
          },
        ];
        commit('SET_DATA', dataFromServer);
      }, 3000);
    },
    load_article_tag(context, tag) {
      console.log(tag);
      context.commit('LOAD_ARTICLE_TAG', tag);
    },
    change_article_tag(context, tag) {
      console.log(tag);
      context.commit('CHANGE_ARTICLE_TAG', tag);
    },
    changeTag( context, tag) { // change project tag
      context.commit('CHANGE_TAG', tag);
    },
    changeLike(context, id) {
      // console.log(id);
      context.commit('CHANGE_LIKE',id);
    },
  },
  modules: {
  }
})
