module.exports = {
  pageDataAll: [
    { id: 0, name: "foo" },
    { id: 1, name: "bar" },
  ],
  eleventyComputed: {
    permalink: (data) => `/${data.pageData.name}/`,
    computedProp: (data) => {
      console.log(data);
      return data.pageData.id;
    }
  }
}
